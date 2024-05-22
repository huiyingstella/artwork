import React from 'react'
import styled from 'styled-components';


export default function BodyContent() {
    return (
        <BodyContentStyled>
            <section id="artists">
                <h2>Graduate Artwork Collection website</h2>
                <div class="articlewrap">
                    <article>
                        <h4>Digital Arts and Humanities</h4>
                        <span># Digital project </span>
                    </article>
                </div >
            </section>
        </BodyContentStyled>
    )
}
const BodyContentStyled = styled.nav`
section{
    padding:2.5rem;
    max-width:1400px;
    margin: 0 auto;
}
h2{
    margin-top:150px;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    font-size: 3em;
    color:#404040;
}
h4{
    margin-top:40px;
    margin-bottom:40px;
    color:#333333;
}
span{
    color:#333333;
    background-color:white;

}
@media (max-width: 550px) {
    h2{
    font-size: 2.5em;
    }
}
`