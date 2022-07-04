import React from 'react'
import styled from 'styled-components';
import { MdOutlineThumbUp, MdOutlineThumbDown } from 'react-icons/md';

const Container = styled.div`

`;

const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const Input = styled.input`
    width: 100%;
    background-color: ${({ theme }) => theme.bg};
    color : ${({ theme }) => theme.text};
    padding : 5px 10px;
    border : none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    outline: none;
    &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.text};
    }
`;

const Comment = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`;

const CommentDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Title = styled.h2`
    font-size: 1.2rem;
    color : ${({ theme }) => theme.text};
    font-weight: 500;
    `;
const TitleInfo = styled.span`
    font-size: 1rem;
    font-weight: 400;
    color : ${({ theme }) => theme.textSoft};
`;
const Text = styled.p`
    font-size: 0.9rem;
    color : ${({ theme }) => theme.text};
`;
const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;
const Button = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;


const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <Input placeholder='Add a comment...' />
            </NewComment>
            {
                [0, 1, 2, 3, 4].map(i => (
                    <Comment key={i}>
                        <Avatar src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                        <CommentDetail>
                            <Title>Account Name <TitleInfo>3 days ago</TitleInfo></Title>
                            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione nesciunt accusamus repudiandae iure, minus quasi fuga veritatis ipsam vitae et ut eveniet numquam atque recusandae explicabo quae sit voluptatibus. Minus iure natus eaque nesciunt pariatur doloremque, at vero dignissimos repellendus?</Text>
                            <Buttons>
                                <Button>
                                    <MdOutlineThumbUp />
                                    3
                                </Button>
                                <Button>
                                    <MdOutlineThumbDown />
                                </Button>
                                <Button>
                                    REPLY
                                </Button>
                            </Buttons>
                        </CommentDetail>
                    </Comment>
                ))
            }
        </Container>
    )
}

export default Comments