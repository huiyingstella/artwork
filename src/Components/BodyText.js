import React from 'react'
import styled from 'styled-components';


export default function BodyText() {
    return (
        <BodyTextStyled>
        <div className='text'>
            <article>
            <p className='p1'>This project serves as the 2024 master's Graduation Work in Digital Arts and Humanities. We invite you to explore additional graduate works within this dynamic field.</p>
            <p className='p2'>Our Graduate Artwork Collection website aims to provide a convenient platform for educators, researchers, art enthusiasts, and the general public to easily explore and learn about the artistic achievements of our university's outstanding graduates. Through our website, you can easily search and browse various types of artworks, including paintings,music, sculptures, photographs, installations, and more.

                In addition, our website offers several features:

                Search function: You can easily search for works you are interested in by keywords such as artist's name, title of the work, date of creation, and so on.
                Artist Profile: Each work is accompanied by a profile of the corresponding artist, allowing you to better understand the creator behind the work and the background of its creation.
                Contact: If you are interested in a certain work or want to know more information, you can contact us through the contact information provided on the website.

                We hope that through this website, we can provide an open and convenient platform for the public to better understand and appreciate the outstanding artworks of our university graduates.
            </p>
            </article>
        </div>
        </BodyTextStyled>
    )
}


const BodyTextStyled = styled.nav`
background-color:white;

.text{
    display: flex;
    justify-content: flex-start;
    margin-top:100px;
    padding:2.5rem;
    max-width:1400px;
    margin: 0 auto;
    article{
        width:70%;
    }
.p1{
    font-weight: 600;
    border-bottom: 3px solid #ccc; 
    padding-top: 20px; 
    padding-bottom: 30px;
}
.p2{
    padding-top: 15px; 
    padding-bottom: 15px;
    line-height: 2;
}
`

