import React from 'react'
import { MdOutlineExplore } from 'react-icons/md';
import styled from 'styled-components'

const Container = styled.div`
    position: sticky;
    padding: 10px;
    background-color: ${({ theme }) => theme.bgLight};
    overflow-x: scroll;
    color: ${({ theme }) => theme.text};
    ::-webkit-scrollbar {
        background-color: ${({ theme }) => theme.bg};
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.bgLight};
    }
    
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.bgLight};
        border-radius: 10px;
    }
 
    &:hover {
        ::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.soft};
            border-radius: 10px;
            height: 5px;
        }
    } 
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    background-color: #494848;
    padding: 10px 20px;
    gap: 10px;
`;

const Active = styled.div`
    background-color: #909090;
    border-radius: 30px;
    padding: 10px 20px;
`;

const Tag = styled.div`
    background-color: ${({ theme }) => theme.hover};
    border-radius: 30px;
    padding: 10px 20px;
`;

// const HDivider = styled.div`
//     height: 80%;
//     border-left : solid 2px #000;
// `;

const Recommendations = () => {
    return (
        <Container>
            <Wrapper>
                <Item>
                    <MdOutlineExplore />
                    <p>Explore</p>
                </Item>
                {/* <HDivider /> */} |
                <Active>
                    <p>All</p>
                </Active>
                <Tag>
                    <p>Recommendations</p>
                </Tag>
                <Tag>
                    <p>Recommendations</p>
                </Tag>
                <Tag>
                    <p>Recommendations</p>
                </Tag>
                <Tag>
                    <p>Recommendations</p>
                </Tag>
                <Tag>
                    <p>Recommendations</p>
                </Tag>
                <Tag>
                    <p>Recommendations</p>
                </Tag>
                <Tag>
                    <p>Recommendations</p>
                </Tag>
                <Tag>
                    <p>Recommendations</p>
                </Tag>
                <Tag>
                    <p>Recommendations</p>
                </Tag>
            </Wrapper>
        </Container>
    )
}

export default Recommendations