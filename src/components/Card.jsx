import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
    width: 360px;
    margin-bottom: 45px;
    cursor: pointer;
    /* padding: 10px 15px; */
`;

const Image = styled.img`
    width: 100%;
    height : 202px;
    background-color: #fff;
`;

const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
`;

const ChannelImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

const DetailText = styled.div`
`;

const Title = styled.h1`
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
    margin-bottom: 8px;
`;
const ChannelName = styled.h2`
    font-size: 16px;
    color: ${({ theme }) => theme.textSoft};
`;
const Info = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
    return (
        <Link to="/video/id" style={{ textDecoration: "none" }}>
            <Container>
                <Image src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <Details>
                    <ChannelImage src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' />
                    <DetailText>
                        <Title>Cool Video Title as a place holder</Title>
                        <ChannelName>Cool Channel</ChannelName>
                        <Info>1.2M views • 2 years ago</Info>
                    </DetailText>
                </Details>
            </Container>
        </Link>
    )
}

export default Card