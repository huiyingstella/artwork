import { Link, useNavigate  } from 'react-router-dom';
import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select, Popconfirm } from 'antd';
import { Table, Tag, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import img404 from '../../img/background.png';
import { useChannel } from '../../Hooks/UseChannel';
import { useEffect, useState } from 'react';
import { delArticleAPI, getArticleListAPI } from '../../Apis/Articleapis';

const { Option } = Select
const { RangePicker } = DatePicker

const Article = () => {
    const navigate = useNavigate()
    const { channelList } = useChannel()
    const status = {
        1: <Tag color='warning'>Pending</Tag>,
        2: <Tag color='success'>Approved</Tag>
    }
    const columns = [
        {
            title: 'Cover',
            dataIndex: 'cover',
            width: 120,
            render: cover => {
                return <img src={cover.images[0] || img404} width={80} height={60} alt="" />
            }
        },
        {
            title: 'Title',
            dataIndex: 'title',
            width: 220
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: data => status[data]
        },
        {
            title: 'Post',
            dataIndex: 'pubdate'
        },
        {
            title: 'Read',
            dataIndex: 'read_count'
        },
        {
            title: 'Comment',
            dataIndex: 'comment_count'
        },
        {
            title: 'Like',
            dataIndex: 'like_count'
        },
        {
            title: 'Operation',
            render: data => {
                return (
                    <Space size="middle">
                        <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={() =>navigate(`/publish?id=${data.id}`)}/>
                        <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            onConfirm={() => onConfirm(data)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button
                                type="primary"
                                danger
                                shape="circle"
                                icon={<DeleteOutlined />}
                            />
                        </Popconfirm>
                    </Space>
                )
            }
        }
    ]


    const [reqData, setReqData] = useState({
        status: '',
        channel_id: '',
        begin_pubdate: '',
        end_pubdate: '',
        page: 1,
        per_page: 4
    })

    const [list, setList] = useState([])
    const [count, setCount] = useState(0)
    useEffect(() => {
        async function getList() {
            const res = await getArticleListAPI(reqData)
            setList(res.data.results)
            setCount(res.data.total_count)
        }
        getList()
    }, [reqData])

    const onFinish = (formValue) => {
        console.log(formValue)
        setReqData({
            ...reqData,
            channel_id: formValue.channel_id,
            status: formValue.status,
            begin_pubdate: formValue.date[0].format('YYYY-MM-DD'),
            end_pubdate: formValue.date[1].format('YYYY-MM-DD')
        })
    }

    const onPageChange = (page) => {
        setReqData({
            ...reqData,
            page
        })
    }

    const onConfirm = async (data) => {
        await delArticleAPI(data.id)
        setReqData({
            ...reqData
        })
    }
    return (
        <div>
            <Card
                title={
                    <Breadcrumb items={[
                        { title: <Link to={'/'}>Home</Link> },
                        { title: 'Article List' },
                    ]} />
                }
                style={{ marginBottom: 20 }}
            >
                <Form initialValues={{ status: '' }} onFinish={onFinish}>
                    <Form.Item label="state" name="status">
                        <Radio.Group>
                            <Radio value={''}>All</Radio>
                            <Radio value={0}>Drafts</Radio>
                            <Radio value={2}>Approved</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="Channel" name="channel_id">
                        <Select
                            placeholder="Please select an article channel"
                            style={{ width: 120 }}
                        >
                            {channelList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
                        </Select>
                    </Form.Item>

                    <Form.Item label="Date" name="date">
                        <RangePicker ></RangePicker>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
                            Screen
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
            <Card title={`Total ${count} of results by filter：`}>
                <Table rowKey="id" columns={columns} dataSource={list} pagination={{
                    total: count,
                    pageSize: reqData.per_page,
                    onChange: onPageChange
                }} />
            </Card>
        </div>
    )
}

export default Article