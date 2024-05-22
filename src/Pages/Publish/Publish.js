import {
    Card,
    Breadcrumb,
    Form,
    Button,
    Radio,
    Input,
    Upload,
    Space,
    Select,
    message
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link, useSearchParams } from 'react-router-dom'
import styled from 'styled-components';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useEffect, useState } from 'react';
import { createArticleAPI, getArticleById } from '../../Apis/Articleapis';
import { useChannel } from '../../Hooks/UseChannel';


const { Option } = Select

const Publish = () => {
    const { channelList } = useChannel()

    const onFinish = (formValue) => {

        if (imageList.length!== imageType) return message.warning('Cover type and picture data mismatch')
        const { title, content, channel_id } = formValue
        const reqData = {
            title,
            content,
            cover: {
                type: imageType,
                images: imageList.map(item => item.response.data.url)
            },
            channel_id
        }
        createArticleAPI(reqData)
    }

    const [imageList, setImageList] = useState([])
    const onUploadChange = (info) => {
        setImageList(info.fileList)
        // console.log('zhengzaishangchuan', info)
    }

    const [imageType, setImageType] = useState(0)
    const onTypeChange = (e) => {
        // console.log('qiehuanle', e.target.value)
        setImageType(e.target.value)
    }

    const [searchParams] = useSearchParams()
    const articleId = searchParams.get('id')
    const [form] = Form.useForm()
    useEffect(() => {
        async function getArticleDetail () {
            const res = await getArticleById(articleId)
            const data = res.data
            const {cover} = data
            form.setFieldsValue({
                ...data,
                type:cover.type
            })
            setImageType(cover.type)
            setImageList(cover.images.map(url => {
                return {url}
            }))
        }
        if(articleId){
            getArticleDetail()
        }
    },[articleId,form])
    return (
        <PublishStyled>
            <div className="publish">
                <Card
                    title={
                        <Breadcrumb items={[
                            { title: <Link to={'/'}>Home</Link> },
                            { title: `${articleId?'Edit' : 'Post' } Articles`},
                        ]}
                        />
                    }
                >
                    <Form
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ type: 0 }}
                        onFinish={onFinish}
                        form={form}
                    >
                        <Form.Item
                            label="Title"
                            name="title"
                            rules={[{ required: true, message: 'Please enter an article title' }]}
                        >
                            <Input placeholder="Please enter an article title" style={{ width: 400 }} />
                        </Form.Item>
                        <Form.Item
                            label="Channel"
                            name="channel_id"
                            rules={[{ required: true, message: 'Please select an article channel' }]}
                        >
                            <Select placeholder="Please select an article channel" style={{ width: 400 }}>
                                {channelList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
                            </Select>
                        </Form.Item>
                        <Form.Item label="Cover">
                            <Form.Item name="type">
                                <Radio.Group onChange={onTypeChange}>
                                    <Radio value={1}>single figure</Radio>
                                    <Radio value={3}>three figures</Radio>
                                    <Radio value={0}>unpictured</Radio>
                                </Radio.Group>
                            </Form.Item>
                            {imageType > 0 && <Upload
                                name="image"
                                listType="picture-card"
                                showUploadList
                                action={'http://geek.itheima.net/v1_0/upload'}
                                onChange={onUploadChange}
                                maxCount={imageType}
                                fileList={imageList}
                            >
                                <div style={{ marginTop: 8 }}>
                                    <PlusOutlined />
                                </div>
                            </Upload>}
                        </Form.Item>
                        <Form.Item
                            label="Content"
                            name="content"
                            rules={[{ required: true, message: 'Please enter article content' }]}
                        >

                            <ReactQuill
                                className="publish-quill"
                                theme="snow"
                                placeholder="Please enter article content"
                            />
                        </Form.Item>


                        <Form.Item wrapperCol={{ offset: 4 }}>
                            <Space>
                                <Button size="large" type="primary" htmlType="submit">
                                    Publish Article
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </PublishStyled>
    )
}

const PublishStyled = styled.div`
.publish {
    position: relative;
}

.ant - upload - list {
    .ant - upload - list - picture - card - container,
    .ant - upload - select {
        width: 146px;
        height: 146px;
    }
}
.publish-quill {
    .ql-editor {
    min-height: 300px;
    }
}
`

export default Publish


