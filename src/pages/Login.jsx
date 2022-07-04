import React from 'react'
import styled from 'styled-components';
import Layout from './Layout'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 180px);
    color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
    display: flex;
    width: 30%;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.bgLight};
    border: 1px solid ${({ theme }) => theme.soft};
    padding: 20px 50px;
    gap: 10px;
`;

const Title = styled.h1`
    font-size: 2rem;
`;
const SubTitle = styled.h2`
    font-size: 1.5rem;
`;
const Input = styled.input`
    width: 100%;
    /* background-color: ${({ theme }) => theme.bg}; */
    background-color: transparent;
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.soft};
    outline: none;
    border-radius: 3px;
    padding: 10px;

    &:focus {
        background-color: transparent;
    }
`;
const Button = styled.button`
    border:none;
    border-radius:3px;
    padding: 10px 25px;
    font-size: 1.2rem;
    background-color: ${({ theme }) => theme.bgLighter};
    color: ${({ theme }) => theme.text};
    cursor: pointer;
`;

const More = styled.div`
    display:flex;
    align-items: center;
    margin-top: 5px;
    justify-content: space-between;
    font-size: 1.1rem;
    color : ${({ theme }) => theme.textSoft};
    gap: 10px;
`;
const Language = styled.div``;
const MoreLinks = styled.div`
    margin-top: 4px;
    display:flex;    
    gap: 10px;
`;
const MoreLink = styled.div`
    cursor: pointer;
`;

const Login = () => {
    return (
        <Layout>
            <Container>
                <Wrapper>
                    <Title>Sign In</Title>
                    <SubTitle>Sign into Your Account</SubTitle>
                    <Input type="text" placeholder='Username' />
                    <Input type="password" placeholder='password' />
                    <Button>Sign In</Button>
                    <Title>or</Title>
                    <Input type="text" placeholder='Username' />
                    <Input type="email" placeholder='Email' />
                    <Input type="password" placeholder='password' />
                    <Button>Sign Up</Button>
                </Wrapper>
                <More>
                    <Language>
                        English (United States)
                    </Language>
                    <MoreLinks>
                        <MoreLink>Help</MoreLink>
                        <MoreLink>Privacy</MoreLink>
                        <MoreLink>Terms</MoreLink>
                    </MoreLinks>
                </More>
            </Container>
        </Layout>
    )
}

export default Login    