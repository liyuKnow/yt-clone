import React from 'react'
import { MdOutlineAccountCircle, MdOutlineSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Recommendations from './Recommendations';


const Container = styled.div`
    position: sticky;
    top: 0;
    height: 64px;
    background-color: ${({ theme }) => theme.bgLighter};
`;

const Wrapper = styled.div`
    height: 100%;
    padding: 0px 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
`;

const Search = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.hover};
    gap: 4px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    border: 1px solid ${({ theme }) => theme.hover};
`;

const Input = styled.input`
    width: 86%;
    height: 100%;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    padding: 5px 20px;
    font-size: 1.3rem;
`;

const Button = styled.button`
    padding: 10px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover {
        background-color: ${({ theme }) => theme.hover}; 
    }
`;

const TopNav = () => {
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input />
                    <MdOutlineSearch size={27} />
                </Search>
                <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
                    <Button>
                        <MdOutlineAccountCircle />
                        SIGN IN
                    </Button>
                </Link>
            </Wrapper>
            <Recommendations />

        </Container >
    )
}

export default TopNav