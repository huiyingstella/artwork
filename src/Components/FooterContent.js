import React from 'react'
import styled from 'styled-components';


export default function FooterContent() {
    return (
        <FooterContentStyled>
            <div class="footer">
                <footer>
                    <div class="content">
                        <h4>SOCIAL</h4>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Contact Us</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Mailing List</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Slack Channel</a>
                            </li>
                        </ul>
                    </div>
                    <div class="content">
                        <h4>PARTNERS</h4>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Libraries</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Information Technology</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Center for the Humanities</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Arts & Science</a>
                            </li>
                        </ul>
                    </div>
                    <div class="content">
                        <h4>POLICIES</h4>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">UCC Accessibility</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </FooterContentStyled>
    )
}
const FooterContentStyled= styled.nav` 
.footer {
    background-color: #666666;
    color: white;
}
footer {
    padding: 3rem;
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    justify-content: space-between;
}

footer ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li{
    margin-top:10px;
}

h4{
    margin-bottom:20px;
}

a{
    text-decoration: none;
    color: white;
}

a:hover {
    color: #FFD700;
}
@media (max-width: 550px) {
    footer {
        display: flex;
        flex-flow: column wrap;
    }
    li{
        margin-top:0px;
    }
    
    h4{
        margin-top:20px;
        margin-bottom:0px;
        font-size:0.8rem;
    }
}
`
