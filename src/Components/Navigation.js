import React from 'react'
import styled from 'styled-components';
import ucc from '../img/ucc.jpg'


export default function Navigation() {
    return (
        <NavigationStyled>
            <div className="header">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <a href="#"><img src={ucc} alt="UCC. Click for home." /></a>
                            </li>
                            <li><a href="#">INFORMATION TECHNOLOGY</a></li>
                            <li><a href="#">&nbsp;| CENTER FOR THE HUMANITIES</a></li>
                            <li><a href="#">&nbsp;| ARTS & SCIENCE</a></li>
                        </ul>
                    </nav>
                </header>
            </div>

        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
.header {
    background-color:black;
}
header {
    padding: 0.1rem;
    max-width:1400px;
    margin: 0 auto;
}
nav ul {
    list-style-type: none;
    margin: 0:
    padding: 0;
}
nav ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    position: relative;
    top: 15px; 
}
img{
    width:100px;
    height:40px;
    object-fit: contain;
    position: relative;
    top: -5px; 
}
nav a {
    text-decoration: none;
    color: white;
    display: block;
}
nav a:hover {
    color: #FFD700;
}
@media (max-width: 992px) {
    .header {
        display: none; 
    }
}
`
