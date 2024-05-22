import React from 'react'
import styled from 'styled-components';
import OfA from '../img/officerA.png';
import OfB from '../img/officerB.png';



export default function Paintings2() {
    return (
        <Paintings2Styled>
            <div className="wrapper">
                <figure>
                    <img src={OfA} alt="officer photo" />
                    <figcaption>
                        <h4>Christina</h4>
                    </figcaption>
                </figure>
                <figure>
                    <img src={OfB} alt="officer photo" />
                    <figcaption>
                        <h4>Bernie</h4>
                    </figcaption>
                </figure>
            </div>
        </Paintings2Styled>
    )
}
const Paintings2Styled = styled.nav` 
img {
    width: 200px;
    height:200px;
    object-fit: cover;
}
figcaption {
    text-align: center;
    background-color: #666666;
    padding:0.5rem;
    h4{
    margin-bottom:-0.1px;
    }
}
.wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    gap: 1%;
    max-width: 1400px;
    margin: 0 auto;
    place-items:center;
}
`

