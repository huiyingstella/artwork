import React from 'react';
import styled from 'styled-components';
import offA from '../img/officerA.png';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import int5 from '../img/int5.jpg';
import int6 from '../img/int6.jpg';
import int7 from '../img/int7.jpg';
import cha1 from '../img/cha2-1.jpg';
import cha2 from '../img/cha2-2.jpg';
import cha3 from '../img/cha2-3.jpg';
import cha4 from '../img/cha2-4.jpg';
import cha5 from '../img/cha2-5.jpg';
import cha6 from '../img/cha2-6.jpg';
import cha7 from '../img/cha2-7.jpg';






export default function PaintContentC() {
    return (
        <PaintContentCStyled>
            <div className='box'>
                <div className="left">
                    <div className="content">
                        <figure>
                            <img className='img1' src={offA} alt="student" />
                            <figcaption>
                                <h2>Tao Ran, China</h2>
                                <span>Digital painting </span>
                                <p className='introduce'>
                                A signed illustrator for several large publishing companies and private enterprises, She enjoys blending reflections on life with vibrant colors and dynamic brushstrokes to create paintings rich in spirit and life texture.
                                </p>
                                <p>
                                "Impression: Free illustrator in the countryside, artistic talent, fortune-teller"
                                </p>
                            </figcaption>
                        </figure>

                        <div className='text'>
                        <h4>Response</h4>
                        <h6>When did you start drawing, and when did you start digital painting?</h6>
                        <p>
                            "I've been drawing since I was very young, copying images from fan calendars and traditional Chinese New Year paintings. It wasn't until my senior year of high school that I began professional art training, practicing sketching and color techniques, and then taking the art entrance exams. After a period of drawing with a mouse, I started digital painting in my sophomore year of college."
                        </p>
                        <img className='int' src={int5} alt="student" />
                        <h6>Why did you choose the path of painting, which seems like a road of no return?</h6>
                        <p>
                            "Personally, I majored in Visual Communication Design and initially worked in graphic design and other visual design fields. Although I was good at it, I didn't like others pointing out flaws in my work. I started experimenting with digital painting and thought I could try taking small freelance projects under my own name and collaborating with companies. This way, if my energy was limited, I could take fewer projects and still meet my basic needs."
                        </p>
                        <img className='int' src={int6} alt="student" />
                        <h6>What does your current illustration work include? (Publishing, commercial illustration, packaging, etc.)</h6>
                        <p>
                            "Initially, I painted wall murals, then wedding scenes. Later, I started illustrating book covers and experimented with tape stickers. Recently, I've tried puzzles. I've worked in various fields such as magazines, packaging, decorative paintings, and prints. Publishing is a major direction for me, with most of my projects being book covers and interiors."
                        </p>
                        <h6> How do you bring the ideas in your head to life on paper?</h6>
                        <p>
                            "I think first you need to clearly visualize what you want to draw in your mind, then find reference materials, and finally realize your idea through accumulation and practice."
                        </p>
                        <h6> How did you develop a series of works with your own style?</h6>
                        <p>
                            "Initially, I couldn't find a style I was good at, so I experimented with many different ones. Currently, I feel I haven't fully developed a unique style and am still in the exploratory phase. Some attempts were abandoned along the way, but I've become much clearer compared to the beginning."
                        </p>
                        <img className='int' src={int7} alt="student"/>
                        <h6>What if you have a lot of ideas but don't know where to focus your efforts?</h6>
                        <p>
                            " It's actually quite simple, just keep yourself busy. Fill up your schedule, and as you work on many things, many will naturally narrow down. Try to think less and do more. Use the time spent on anxiety and confusion to take action. Even if I make a mistake, I gain experience from trying."
                        </p>
                        <h6>What if you're afraid of the cost of mistakes?</h6>
                        <p>
                        If you have limited time, I suggest digging deep into one area. Choose the option you want to try the most and focus on it. Once you've solved most problems in that area, like securing your basic needs, you can confidently try other areas. For illustrators, it's impossible to remain unchanged forever. Even if you're an impressionist landscape painter, your methods will evolve with your knowledge and life experiences. The most you can think is that you may have taken a wrong turn, but that's also a form of accumulation. I personally believe that painting is interconnected. <br/>
                        Even if styles and directions differ, they ultimately help shape your unique style.
                        </p>
                        <h6>What kind of attempts make you decide to give up?</h6>
                        <p>
                            "Something I initially liked might become simpler over time, leading to less practice and eventually giving up. Our energy is limited, and we can't master every style to perfection. You have to give up some and find that new styles might enhance your interest, leading you to abandon those you're less passionate about."
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
        </PaintContentCStyled>
    )
}

const PaintContentCStyled = styled.nav` 
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
        max-width: 50%;
        height: auto;
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
    flex: 1;
    padding-left: 10px;
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
    position: relative;
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
