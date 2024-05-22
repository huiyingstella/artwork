import { Form, message } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { fetchLogin } from '../Store/User';
import { useNavigate } from 'react-router-dom';




export default function Loginn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onFinish = async(values) => {
        console.log(values)
        await dispatch(fetchLogin(values));
            navigate('/uploadpage');
            message.success('Login Success');
        }

        return (
            <LoginStyled>
                <div className='backgd'>
                    <div className='box'>
                        <div className='box2'>
                            <span>log in</span>
                            <Form onFinish={onFinish} validateTrigger="onBlur">
                                <Form.Item
                                    name="mobile"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username',
                                        },
                                        {
                                            pattern: /^1[3-9]\d{9}$/,
                                            message: 'Please enter the correct form'
                                        }
                                    ]}>
                                    <input type="text" placeholder="username" id="username" />
                                </Form.Item>
                                <Form.Item
                                    name="code"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password',
                                        },
                                    ]}>
                                    <input type="text" placeholder="password" id="password" />
                                </Form.Item>
                                <Form.Item>
                                    <button type="submit" id="submit">log in</button>
                                </Form.Item>
                                <div className='remeb'>
                                    <input type="checkbox" id='checkbox' name="checkbox" />
                                    <label for="checkbox">Remember me</label>
                                </div>
                            </Form>
                        </div>
                        <div className='text'>
                            This website is protected by the reCAPTCHA system, and Google's
                            &nbsp;
                            <a href='https://chatgpt.com/'> privacy principles</a>
                            &nbsp;
                            and
                            &nbsp;
                            <a href='https://chatgpt.com/'>terms of service</a>
                            &nbsp;
                            apply to this website.
                        </div>
                    </div>
                </div>
            </LoginStyled >
        )
    }

    const LoginStyled = styled.div`
.backgd{
    display: flex;
    justify-content: center;
    align-items: center;
    height:700px;
    background-color:rgba(128,128,128,0.1);
    .box{
        width:400px;
        height:450px;
        background-color:#ffffff;
        .box2{
            padding-left: 50px; 
            padding-right: 40px;
            form {
                #username,#password{
                    width:300px;
                    height:40px;
                    padding: 20px;
                    border: 1px solid #ccc; 
                    font-size:16px; 
                }
                #submit{
                    width:300px;
                    height:30px;
                    padding: 20px; 
                    border: 1px solid #ccc; 
                    font-size:16px; 
                    color:#ffffff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color:#FFD700;
                    &:hover{
                        background-color: #CCAD00;
                    }
                }
                .remeb{
                    margin-top:-20px;
                    label {
                        font-size: 14px;
                        padding:5px;
                        font-weight:500;
                    }
                }
            }
            span{
                display:block;
                margin-top:30px;
                margin-bottom:15px;
                font-size:30px;
            }
            p{
                display:block;
                font-size:12px;
                line-height: 1rem;
                margin-top:10px;
            }
            a{
                font-size:12px;
                text-decoration: none;
                color:blue;
            }
        }
        .ques{
            margin-top:20px;
            width:400px;
            height:60px;
            border-top: 1px solid rgba(128,128,128,0.1);
            border-bottom: 1px solid rgba(128,128,128,0.1);
            display: flex;
            align-items: center; /* 垂直居中 */
            justify-content: center;
            p, a {
                font-size:18px;
                display: inline-block; 
            }
            a{
                text-decoration: none;
                color:blue;
            }
        }
        .text{
            margin-top:10px;
            padding-left: 40px; 
            padding-right: 40px;
            font-size:12px;
            a{
            text-decoration: none;
            color:blue;
            }

        }
    }
}

@media screen and (max-width: 768px)
{
    .backgd{
        height:100%;
    }
    .box{
        width:200px;
        height:250px;
        background-color:#ffffff;
}
.box2{
    padding-left: 20px; 
    padding-right: 20px;
    form {
        #username,#password{
            width:100px;
            height:20px;
            padding: 10px;
            border: 1px solid #ccc; 
            font-size:10px; 
        }
        .text{
            margin-top:10px;
            padding-left: 40px; 
            padding-right: 40px;
            font-size:8px;
            a{
            text-decoration: none;
            color:blue;
            }
`;

