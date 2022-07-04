import React from 'react'
import styled from 'styled-components';
import { GrYoutube } from 'react-icons/gr';
import { MdHome, MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineHistory, MdOutlineLibraryMusic, MdOutlineSportsBasketball, MdOutlineSports, MdOutlineMovie, MdOutlineArticle, MdOutlineFlag, MdOutlineSettings, MdOutlineLiveTv, MdOutlineHelp, MdOutlineSettingsBrightness, MdOutlineAccountCircle } from 'react-icons/md'
import { Link } from "react-router-dom"

const Container = styled.div`
    flex:1;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 100vh;
    color: ${({ theme }) => theme.text};
    overflow-y: auto;
    font-size: 16px;
    /* width */
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }
    
    /* Track */
    ::-webkit-scrollbar-track {
        background: transparent;
        width: 5px;
        height: 5px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #${({ theme }) => theme.soft};
        width: 5px;
        height: 5px;
        border-radius: 5px;
    }
    

    /* hover */
    &:hover {
        ::-webkit-scrollbar-thumb {
            background: #ababab;
        }
    }
    `;

const Wrapper = styled.div`
    padding: 18px 18px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    font-weight: bold;
    margin-bottom: 15px;
    gap: 4px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0px;

    &:hover {
        background-color: ${({ theme }) => theme.hover};
    }
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border : 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div`
`;
const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
    return (
        <Container>
            <Wrapper>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <Logo>
                        <GrYoutube color='red' size={'2rem'} />
                        <p>LiyuTube</p>
                    </Logo>
                </Link>
                <Item>
                    <MdHome size={'1.5rem'} />
                    Home
                </Item>
                <Item>
                    <MdOutlineExplore size={'1.5rem'} />
                    Explore
                </Item>
                <Item>
                    <MdOutlineSubscriptions size={'1.5rem'} />
                    Home
                </Item>
                <Hr />
                <Item>
                    <MdOutlineVideoLibrary size={'1.5rem'} />
                    Library
                </Item>
                <Item>
                    <MdOutlineHistory size={'1.5rem'} />
                    History
                </Item>
                <Hr />
                <Login>
                    Sign in to like videos, comment, and subscribe.
                    <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
                        <Button>
                            <MdOutlineAccountCircle />
                            SIGN IN
                        </Button>
                    </Link>
                </Login>
                <Hr />
                <Title>
                    BEST OF LIYUTUBE
                </Title>
                <Item>
                    <MdOutlineLibraryMusic size={'1.5rem'} />
                    Music
                </Item>
                <Item>
                    <MdOutlineSportsBasketball size={'1.5rem'} />
                    Sports
                </Item>
                <Item>
                    <MdOutlineSports size={'1.5rem'} />
                    Gaming
                </Item>
                <Item>
                    <MdOutlineMovie size={'1.5rem'} />
                    Movies
                </Item>
                <Item>
                    <MdOutlineArticle size={'1.5rem'} />
                    News
                </Item>
                <Item>
                    <MdOutlineLiveTv size={'1.5rem'} />
                    Live
                </Item>
                <Hr />
                <Item>
                    <MdOutlineSettings size={'1.5rem'} />
                    Setting
                </Item>
                <Item>
                    <MdOutlineFlag size={'1.5rem'} />
                    Report
                </Item>
                <Item>
                    <MdOutlineHelp size={'1.5rem'} />
                    Help
                </Item>
                <Item onClick={() => setDarkMode(!darkMode)}>
                    <MdOutlineSettingsBrightness size={'1.5rem'} />
                    {darkMode ? "Light" : "Dark"} Mode
                </Item>
            </Wrapper>
        </Container>
    )
}

export default Menu