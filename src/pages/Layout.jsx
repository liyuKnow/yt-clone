import React, { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../utils/Theme";
import Menu from '../components/Menu';
import Recommendations from "../components/Recommendations";
import TopNav from '../components/TopNav';


const Container = styled.div`
  display: flex;
  
`;

const Main = styled.main`
  flex:6;
  height: 100vh;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  overflow-y: auto;
`;

const Wrapper = styled.div`
    padding: 22px 81px;

    @media (max-width: 768px) {
        padding: 22px 68px;
    }

    @media (max-width: 576px) {
        padding: 22px 48px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
    }
`;

const Layout = ({ children }) => {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme} >
            <Container>
                <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
                <Main>
                    <TopNav />
                    <Wrapper>
                        {children}
                    </Wrapper>
                </Main>
            </Container>
        </ThemeProvider>
    )
}

export default Layout