import React from 'react'
import styled from 'styled-components';
import DrA from '../img/Dr-A.png';
import DrB from '../img/Dr-B.png';
import DrC from '../img/Dr-C.png';
import DrD from '../img/Dr-D.png';
import DrE from '../img/Dr-E.png';
import DrF from '../img/Dr-F.png';
import offA from '../img/officerA.png';




export default function Paintings() {
  return (
    <PaintingsStyled>
      <div className="wrapper">
        <figure>
          <img src={DrC} alt="Student" />
          <figcaption>
          <a href="/paintcontent"><h4>Yi Chang</h4></a>
          </figcaption>
        </figure>
        <figure>
          <img src={DrB} alt="student" />
          <figcaption>
          <a href="/paintcontentB"><h4>Liu Ding</h4></a>
          </figcaption>
        </figure>
        <figure>
          <img src={offA} alt="student" />
          <figcaption>
          <a href="/paintcontentC"><h4>Tao Ran</h4></a>
          </figcaption>
        </figure>
        <figure>
          <img src={DrD} alt="student" />
          <figcaption>
            <h4> Maggie</h4>
          </figcaption>
        </figure>
        <figure>
          <img src={DrE} alt="student" />
          <figcaption>
            <h4>Cary</h4>
          </figcaption>
        </figure>
        <figure>
          <img src={DrF} alt="student" />
          <figcaption>
            <h4>Daniel</h4>
          </figcaption>
        </figure>
        <figure>
          <img src={DrA} alt="student" />
          <figcaption>
            <h4>Josephine</h4>
          </figcaption>
        </figure>
      </div>

    </PaintingsStyled>
  )
}

const PaintingsStyled = styled.nav` 
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
  a{
    text-decoration: none;
    color:white;
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
  @media (max-width: 1024px) {
  .wrapper {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 768px) {
  .wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 425px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 375px) {
  .wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}
`

