import React from 'react'
import styled from 'styled-components';
import Layout from './Layout'
import Card from "../components/Card";


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Home = () => {
    return (
        <Layout>
            <Container>
                {
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((index) => (
                        <Card key={index} />
                    ))
                }
            </Container>
        </Layout>
    )
}

export default Home