import { Layout, Menu, Popconfirm } from 'antd'
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined,
} from '@ant-design/icons'
import styled from 'styled-components';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { fetchUserInfo, clearUserInfo } from '../Store/User';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



const { Header, Sider } = Layout

const items = [
    {
        label: 'Home',
        key: '/upload/home',
        icon: <HomeOutlined />,
    },
    {
        label: 'Articles',
        key: '/upload/article',
        icon: <DiffOutlined />,
    },
    {
        label: 'Create an article',
        key: '/upload/publish',
        icon: <EditOutlined />,
    },
]

const Uploadpage = () => {
    const navigate =  useNavigate()
    const onMenuClick = (route) =>{
        const path = route.key
        navigate(path)
    }

    const location = useLocation()
    const selectedkey = location.pathname 

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUserInfo())
    },[dispatch])

    const onConfirm = () => {
        dispatch(clearUserInfo())
        navigate('/')
    }

    const name = useSelector(state => state.user.userInfo.name)
    return (
        <GeekLayoutStyled>
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <div className="user-info">
                        <span className="user-name">{name}</span>
                        <span className="user-logout">
                            <Popconfirm title="Whether to confirm the exit?" okText="Exit" cancelText="Cancel" onConfirm={onConfirm}>
                                <LogoutOutlined /> Exit
                            </Popconfirm>
                        </span>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            theme="dark"
                            selectedKeys={selectedkey}
                            onClick={onMenuClick}
                            items={items}
                            style={{ height: '100vh', borderRight: 0 }}></Menu>
                    </Sider>
                    <Layout className="layout-content" style={{ padding: 20 }}>
                        <Outlet/>
                    </Layout>
                </Layout>
            </Layout>
        </GeekLayoutStyled>
    )
}
const GeekLayoutStyled = styled.div`
.ant-layout {
    height: 100%;
}

.header {
    padding: 0;
}

.logo {
    width: 200px;
    height: 60px;
}

.layout-content {
    overflow-y: auto;
}

.user-info {
    position: absolute;
    right: 0;
    top: 0;
    padding-right: 20px;
    color: #fff;
    
    .user-name {
margin-right: 20px;
    }
    
    .user-logout {
display: inline-block;
cursor: pointer;
    }
}
.ant-layout-header {
    padding: 0 !important;
}
`

export default Uploadpage
