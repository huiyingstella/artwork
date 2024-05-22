import React from 'react';
import styled from 'styled-components';
import DrB from '../img/Dr-B.png';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import int3 from '../img/int3.jpg';
import int4 from '../img/int4.jpg';
import cha1 from '../img/cha1-1.jpg';
import cha2 from '../img/cha1-2.jpg';
import cha3 from '../img/cha1-3.jpg';
import cha4 from '../img/cha1-4.jpg';
import cha5 from '../img/cha1-5.jpg';
import cha6 from '../img/cha1-6.jpg';
import cha7 from '../img/cha1-7.jpg';




export default function PaintContentB() {
    return (
        <PaintContentBStyled>
            <div className='box'>
                <div className="left">
                    <div className="content">
                        <figure>
                            <img className='img1' src={DrB} alt="Lecturer" />
                            <figcaption>
                                <h2>Liu Ding, Singapore</h2>
                                <span>Canvas Acrylic Painting</span>
                                <p className='introduce'>
                                After graduating, went to Japan for study and travel. She founded solo exhibitions in both 2020 and 2023. . She is a full-time artist, only active on Xiaohongshu. Her exhibition experiences are mentioned in the interview. In her spare time, she does interesting things!
                                </p>
                                <p>
                                "Impression: Sense of conviction, friendly, successful IP creator, independent artist."
                                </p>
                            </figcaption>
                        </figure>

                        <div className='text'>
                        <h4>Response</h4>
                            <h6>When did you start drawing, and was there any turning point? Can you share the changes in your drawing style from the beginning to now?</h6>
                            <p>
                                "I've loved drawing since I was a child. I even skipped school to stay home making crafts and drawing, which drove my mom crazy."
                            </p>
                            <img className='int' src={int3} alt="Lecturer photo" />
                            <h6>Have you always done hand-drawing? Do you plan to try digital drawing?</h6>
                            <p>
                                "I've always done hand-drawing. I'm a jinx for electronic technology. Anything that involves using machines breaks down! Also, I don't really know how to use them, maybe I'm just too clumsy to get the hang of it, hahaha."
                            </p>
                            <img className='int' src={int4} alt="Lecturer photo" />
                            <h6>Why did you create the "Dream Island" series?</h6>
                            <p>
                                ""Dream Island" is a beautiful and romantic story. I started this series after my husband and I got married and moved to Singapore to study last June. This style is completely different from my previous works, which were more gloomy by comparison. Entering marriage brought many beautiful memories and a sense of security, so "Dream Island" has a fresh feel.""
                            </p>
                            <h6>Some of your works are a bit melancholic, while others are very healing. Does this relate to your lifestyle and mindset?</h6>
                            <p>
                                "Yes, absolutely. When I was in Japan (like in my first KOKORO works), I was probably very lonely."
                            </p>
                            <h6>Do you have any advice for artists looking to create their own IP?</h6>
                            <p>
                                "First, find what you love to draw the most! It's like when you pick up a pen, you naturally draw "it". You need to be confident in your IP image, believing it's unique! Also, draw different things frequently and carry a sketchbook with you everywhere. Sketch whenever you can to improve your creativity. For me, drawing is just a part of life."
                            </p>
                            <h6>You are currently holding a solo exhibition in Hong Kong. What conditions should one meet to hold their own exhibition?</h6>
                            <p>
                                "Haha, the Hong Kong exhibition ended last month. To hold your own exhibition, instead of blindly seeking out galleries, let the galleries come to you. Expose your work widely (be mindful of copycats)"
                            </p>
                            <h6>So, if your work is good and you share it, galleries will come to you?</h6>
                            <p>
                                "Yes, be patient. Galleries will notice. Different galleries have different styles, so when approaching them, research beforehand to see if they like your style; otherwise, they won't respond."
                            </p>
                            <h6>Monetization for artists is a popular topic. Could you share some ways artists can monetize their work or increase their fame?</h6>
                            <p>
                                "Nowadays, there are many online platforms for gaining fame, like Xiaohongshu, Weibo, etc. Monetization primarily comes from having your own exhibitions once you're established. You can also sell your artwork on various websites and create merchandise to develop your unique style into an IP. It takes a lot of time initially, so you must be patient. As people get to know you, monetization becomes easier."
                            </p>
                            <h6>Have you ever felt like giving up? If so, how did you overcome it?</h6>
                            <p>
                                "Honestly, no! But, like everyone says, it's hard and you might be poor. I've experienced that too! But because I love it so much, I feel uncomfortable if I don't draw for three days!"
                            </p>
                            <h6> How do you cope when your work is not mature enough to support you financially?</h6>
                            <p>
                                "I'm not wealthy now, still struggling. You have to be able to endure hardship. I've done all kinds of jobs. I don't fit well in environments with many people, which boils down to social anxiety and low emotional intelligence. Drawing must always be my main career. Some might say it's easier said than done, but if I don't make drawing my main career, I don't know what else I'm good at. Working is just to support drawing as my primary job. Working is tiring and annoying, but if you think it's worth it for drawing, it helps. Build your confidence and believe that those of us who can draw are special, like Anunnaki!"
                            </p>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <Carousel data-bs-theme="dark" className='rightcontent'>
                    <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={cha1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={cha2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={cha3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={cha4}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={cha5}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={cha6}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={cha7}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </PaintContentBStyled>
    )
}

const PaintContentBStyled = styled.nav` 
.box {
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
}
.left {
    width: 50%;
    overflow-y: scroll;
    height: 100vh;
    box-sizing: border-box;
    padding: 10px;
    background-color: white;
    span{
        color: #666666;
    }
    .text{
        padding:2rem;
    }
    h4{
        color:white;
        padding:8px;
        background-color: #666666;
        margin-bottom:30px;
    }
    h6{
        font-weight:bold;
        color: #666666;
    }
    p{
        font-weight:lighter;
    }
    .img1 {
        max-width: 50%; /* 图片占据figure的50%宽度 */
        height: auto; /* 保持图片纵横比 */
        object-fit: contain;
    }
    .int{
        width: 100%;
    }
}
figure{
    display:flex;
    flex-wrap: wrap;
}
figcaption {
    flex: 1; /* 让figcaption占据剩余的所有空间 */
    padding-left: 10px; /* 设置左边距 */
}
.introduce{
    margin-top:15px;
}



.right {
    width: 50%;
    height: 100vh;
    box-sizing: border-box;
    padding: 10px;
    background-color: white;
}
.content {
    background-color: white;
}
.rightcontent{
    height: 100vh;
}
.carousel-item {
    width: 100%;
    height: 100vh;
    position: relative; /* 设置 Carousel.Item 的定位为相对定位 */
}

.carousel-item img {
    padding:4.5rem;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover; 
    width: auto;
    height: auto;
    position: absolute; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
}
`
