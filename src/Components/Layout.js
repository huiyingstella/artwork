import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../Components/Navigation';
import Smallnav from '../Components/Smallnav';
import FooterContent from '../Components/FooterContent';


const Layout = () => {
    return (
        <div>
            <LayoutStyled>
            <Navigation />
            <Smallnav />
            <MainContent>
            <Outlet />
            </MainContent>
            <FooterContent/>
            </LayoutStyled>
        </div>
    );
};

export default Layout;
const LayoutStyled = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const MainContent = styled.div`
    flex: 1; 
    display: flex;
    flex-direction: column;
`;
