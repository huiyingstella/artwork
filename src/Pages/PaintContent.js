import React from 'react';
import styled from 'styled-components';
import DrC from '../img/Dr-C.png';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import int1 from '../img/int1.jpg';
import int2 from '../img/int2.jpg';
import cha1 from '../img/cha1.jpg';
import cha2 from '../img/cha2.png';
import cha3 from '../img/cha3.png';
import cha4 from '../img/cha4.png';
import cha5 from '../img/cha5.png';
import cha6 from '../img/cha6.png';
import cha7 from '../img/cha7.png';






export default function PaintContent() {
    return (
        <PaintContentStyled>
            <div className='box'>
                <div className="left">
                    <div className="content">
                        <figure>
                            <img className='img1' src={DrC} alt="Lecturer" />
                            <figcaption>
                                <h2>Yi Chang, China</h2>
                                <span>Majoring in Visual Communication</span>
                                <p className='introduce'>
                                Junior in 2023, majoring in Visual Communication. Active platforms: Xiaohongshu, Bilibili, Weibo, Zcool, Graffiti Kingdom. Platform ID: NaCI. NaCl's illustration main work projects are book illustrations. During holidays, teaches children's drawing in a studio, likes chatting with strangers.<br/>
                                </p>
                                <p>"Impression: Currently the youngest interviewee, firm beliefs, promising future."
                                </p>
                            </figcaption>
                        </figure>

                        <div className='text'>
                            <h4>Response</h4>
                            <h6>When did you start drawing, and was there any turning point? Can you share the changes in your drawing style from the beginning to now?</h6>
                            <p>
                                "After attending many other interest classes, I found that only drawing could persist. I guess drawing gave me more confidence at that time. I started formal drawing lessons in the first year of junior high."
                            </p>
                            <h6>Why did you choose the major of Visual Communication?</h6>
                            <p>
                                "At that time, I didn't know what this major was about. Baidu had a lot of information about it, and I thought it was a major in handicrafts. Our teacher gave one-on-one homework guidance in class. When it wasn't my turn, I would draw illustrations if I was in a good mood. If I wasn't, I would chat with friends or stroll around the school. Although I painted illustrations, I was still in the major of visual communication."
                            </p>
                            <h6>
                                Was there anything special that happened in 2022 that made your style and direction clear?
                            </h6>
                            <p>
                                "In 2022, I was particularly diligent and painted many colorful sketches."
                            </p>
                            <img className='int' src={int1} alt="Lecturer photo" />
                            <h6>
                                Why did you create the "Town Series"? How did you come up with the imaginative scenes in it?
                            </h6>
                            <p>
                                "At that time, I watched a lecture by Tianran, who talked about her work "One Year". I loved it so much that I was inspired to paint some landscapes I took. So I started drawing personal IP illustrations of small houses. Many of my themes are based on things happening around me. The first one I drew was the little rabbit. Then I immediately drew the first town. It was liked by many people, so I decided to continue.<br />
                                As for the concept, I basically have a small point that I want to draw, and then I think about it while drawing."
                            </p>
                            <h6>Many artists tend to abandon a series midway. Can you share how you maintain enthusiasm for outputting a series?</h6>
                            <p>
                                " I have many discarded drawings, and some finished ones feel too bad and are hidden by me. I think enthusiasm comes from not drawing commissions but always having a passion for drawing. The only way for me to keep doing something is to force myself. I started drawing the "Town Series" around October last year, and I set a goal for myself to update daily for a month. Promising this method on social media has been very useful for me. I feel embarrassed to lie, so I will persist in finishing it."
                            </p>
                            <img className='int' src={int2} alt="Lecturer photo" />
                            <h6>Now the "Town Series" is also a very vibrant IP. What types of collaborations are currently more common?</h6>
                            <p>
                                "Currently, the main types of collaborations are related to books and puzzles. The clients probably value my imagination, and many of them like delicate graphics. It has been liked by many friends, and I have also interacted with many teachers I like. Other collaborations are basically seen by clients through this series."
                            </p>
                            <h6>It's a process; are there any other considerations in the middle? For example, whether to make money first or do your own thing first.</h6>
                            <p>
                                "My teacher told me not to miss any opportunities. But recently, I haven't drawn much because I was tired from drawing commissions. I didn't expect being an illustrator to be so tiring. Recently, I decided not to take on any projects unless they are good. I will focus on my own content first."
                            </p>
                            <h6> You have mastered your "traffic password" now. Could you share some insights from original creators on operating platforms?</h6>
                            <p>
                                "I think due to aesthetic reasons in China, most platforms prefer graphics that are exquisite, complex, and rich in color. Also, being altruistic is the eternal traffic password. You can also create tutorials usually. I have seen many illustrators who seem to be able to succeed by persistently drawing one IP."
                            </p>
                            <h6>In the process of making tutorials, what kind of new inspirations do you get?</h6>
                            <p>
                                " I usually also work as a teaching assistant in the studio. In the process of making tutorials, it can also help me organize some content that I have mastered. It's convenient for me to teach children."
                            </p>
                            <h6>Can you provide some advice on how to monetize illustrations for new illustrators, and how to communicate with clients?</h6>
                            <p>
                                "I have seen many illustrators directly authorize jigsaw puzzles or other cultural and creative products, which is quite good. But I don't have this option because all my drawings are 2.5D illustrations, so I suggest drawing flat ones. As for communicating with clients, it is to let the client know your principles with a good but firm attitude."
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
        </PaintContentStyled>
    )
}

const PaintContentStyled = styled.nav` 
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
