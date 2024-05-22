import styled from 'styled-components';
import background from './img/background.png'
import React from 'react'
import BodyContent from './Components/BodyContent';
import BodyText from './Components/BodyText';

export default function App() {
  return (
    <AppStyled>
      <BodyContent/>
      <BodyText/>
    </AppStyled>
  )
}

const AppStyled = styled.nav`
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
background-image: url(${background}); 
background-repeat: no-repeat;
background-size: cover;
background-position: center; 
background-attachment: fixed; 
flex-grow: 1;
`
