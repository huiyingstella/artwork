import styled from 'styled-components';
import Navigation from './Components/Navigation';
import background from './img/background.png'
import Smallnav from './Components/Smallnav';
import BodyContent from './Components/BodyContent';
import FooterContent from './Components/FooterContent';


function App() {
  return (
    <AppStyled>
      <Navigation/>
      <Smallnav/>
      <BodyContent/>
      <FooterContent/>
    </AppStyled>
  );
}
const AppStyled = styled.nav`
width: 100%;
height: 35rem;
background-image: url(${background}); 
background-repeat: no-repeat;
background-size: cover;
background-position: center; 
background-attachment: fixed; 

`
export default App;
