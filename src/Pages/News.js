import React from 'react';
import styled from 'styled-components';
import dig1 from '../img/dig1.jpg';
import dig2 from '../img/dig2.jpg';
import dig3 from '../img/dig3.jpg';
import dig4 from '../img/dig4.jpg';
import dig5 from '../img/dig5.jpg';
import dig6 from '../img/dig6.jpg';
import dig7 from '../img/dig7.jpg';
import dig8 from '../img/dig8.jpg';
import dig9 from '../img/dig9.jpg';


export default function News() {
    return (
        <NewsStyled>
            <div className="wrapper">
                <figure className='one'>
                    <img src={dig1} alt="digital art"/>
                        <figcaption>
                            <h2>The 2nd Symposium on Digital Art: June 13 & 14</h2>
                            <p>Exploring Digital Art: 22 Presentations & Panels</p>
                        </figcaption>
                </figure>

                <figure className='left'>
                <img src={dig2} alt="digital art"/>
                        <figcaption>
                            <h2>The 2nd Symposium on Digital Art in Ireland</h2>
                            <p>Exploring Digital Arts: June 13 & 14 @ University College Cork</p>
                        </figcaption>
                </figure>
                <figure className='right'>
                <img src={dig3} alt="digital art"/>
                        <figcaption>
                            <h2>Granary Showcase: UCC Future Humanities Projects</h2>
                            <p>Exploring Collaborative Research Beyond UCC</p>
                        </figcaption>
                </figure>

                <figure className='one'>
                <img src={dig4} alt="digital art"/>
                        <figcaption>
                            <h2>Congrats to Limerick's Sean O'Sullivan, Winner of 60th BT Young Scientist & Tech Exhibition</h2>
                            <p>Pioneering Digital Humanities with "VerifyMe" Project</p>
                        </figcaption>
                </figure>

                <figure className='left'>
                <img src={dig5} alt="digital art"/>
                        <figcaption>
                            <h2>Digital Humanities Students Receive Quercus College Scholarships</h2>
                            <p>Celebrating Academic Excellence with John Creedon and Tara Loftus</p>
                        </figcaption>
                </figure>
                <figure className='right'>
                <img src={dig6} alt="digital art"/>
                        <figcaption>
                            <h2>UCC Hosts Collaborative Workshop on Irish and Chinese Literature</h2>
                            <p>Exploring Connections and Exchanges Between Cork and Shanghai</p>
                        </figcaption>
                </figure>

                <figure className='one'>
                <img src={dig7} alt="digital art"/>
                        <figcaption>
                            <h2>English & Digital Humanities Research Day</h2>
                            <p>Exploring Current Trends in Academic & Creative Publishing</p>
                        </figcaption>
                </figure>

                <figure className='left'>
                <img src={dig8} alt="digital art"/>
                        <figcaption>
                            <h2>Campus-Enterprise Recruitment Fair</h2>
                            <p>Explore Opportunities with Digital Humanities and Industry Collaboration</p>
                        </figcaption>
                </figure>
                <figure className='right'>
                <img src={dig9} alt="digital art"/>
                        <figcaption>
                            <h2>Digital Creativity Week for Digital Humanities MA Students</h2>
                            <p>Exploring Innovation and Collaboration with Boole Library</p>
                        </figcaption>
                </figure>
            </div>

        </NewsStyled>


    )
}

const NewsStyled = styled.nav`
margin-bottom: 250px;
img {
    width: 100%;
    height:550px;
    object-fit: cover;
}
figcaption {
    margin-top: -4px;
}
.wrapper {
    display: grid;
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
    gap: 1%;
}
.one{
    grid-column: 1 / span 2
}
.left {
    grid-column: 1 / span 1;
}
.right {
    grid-column: 2 / span 1;
}
figure {
    margin: 0;
    padding: 0;
}
figcaption {
    background-color: #666666;
    color: white;
    padding: 1rem;
}
  figcaption * {
    margin: 0.5rem;
}
@media (max-width: 768px) {
    margin-bottom: 550px;
    .wrapper {
        grid-template-columns: repeat(1, minmax(min-content, 1fr));
    }
    .one{
        grid-column: 1 / span 1
    }
    .left {
        grid-column: 1 / span 1;
    }
    .right {
        grid-column: 1 / span 1;
    }
}
`
