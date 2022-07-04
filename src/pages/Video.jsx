import React from 'react';
import { MdArrowDropDown, MdDownload, MdOutlineAddTask, MdOutlineFolderShared, MdOutlineIosShare, MdOutlineOfflineShare, MdOutlineReplay, MdOutlineReplay30, MdOutlineReplay5, MdOutlineReply, MdOutlineReplyAll, MdOutlineScreenShare, MdOutlineShare, MdOutlineShareLocation, MdOutlineThumbDown, MdOutlineThumbUp, MdOutlineThumbUpAlt, MdOutlineThumbUpOffAlt, MdReply, MdShare, MdThumbDown, MdThumbUp } from 'react-icons/md';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/Card';
import Comments from '../components/Comments';
import Layout from './Layout';

const Container = styled.div`
    display: flex;
    gap:24px;
`;
const Content = styled.div`
    flex:5;
`;

const VideoWrapper = styled.div``;
const Title = styled.div`
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.text};
    margin-top: 20px;
    margin-bottom: 10px;
`;
const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Info = styled.span`
    margin: 15px 0px;
    color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
    display: flex;
    align-items: center;
    gap:4px;
    cursor: pointer;
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 1px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ChannelInfo = styled.div`
    display: flex;
    gap: 20px;
`;
const Image = styled.img`
    width: 59px;
    height: 59px;
    border-radius: 50%;
`;
const Detail = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
    font-weight: 500;
`;
const Counter = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin-top: 5px;
    margin-bottom: 20px;
`;
const Description = styled.p`
    font-size: 16px;
`;

const Subscribe = styled.button`
    background-color: #ee2020;
    color: #fff;
    border: none;
    outline: none;
    height: max-content;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
`;

const RecommendedVideos = styled.div`
    flex:2;
    
`;

const RecommendedVideoWrapper = styled.div`
    display: flex;
    margin-bottom: 10px;
    height: 130px;
    cursor: pointer;
`;

const RecommendedVideo = styled.div`
    width: 45%;
`;

const Thumbnail = styled.img`
    width:100%;
    height:100%;
`;

const VideoLength = styled.p`
    font-size: 14px;
    padding : 0px 5px;
    bottom: 10px;
    right: 10px;
    background-color: rgba(0,0,0,0.5);
`;

const VideoDetails = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    padding-left: 7px;
`;

const RecommendedTitle = styled.h3`
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    font-weight: 500;
`;
const RecommendedChannelName = styled.p`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.textSoft};
    margin-top: 10px;
`;
const RecommendedInfo = styled.p`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.textSoft};
    margin-top: 10px;
`;

const Video = () => {
    return (
        <Layout>
            <Container>
                <Content>
                    <VideoWrapper>
                        <iframe
                            width="100%"
                            height="450px"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </VideoWrapper>
                    <Title>
                        Rick Astley - Never Gonna Give You Up (Official Music Video)
                    </Title>
                    <Details>
                        <Info>
                            1,241,282,204 views
                        </Info>
                        <Buttons>
                            <Button><MdOutlineThumbUp /> 14M</Button>
                            <Button><MdOutlineThumbDown />DISLIKE </Button>
                            <Button><MdOutlineReply />SHARE </Button>
                            <Button><MdDownload />DOWNLOAD </Button>
                            <Button><MdDownload />CLIP </Button>
                        </Buttons>
                    </Details>
                    <Hr />
                    <Channel>
                        <ChannelInfo>
                            <Image src="https://yt3.ggpht.com/BbWaWU-qyR5nfxxXclxsI8zepppYL5x1agIPGfRdXFm5fPEewDsRRWg4x6P6fdKNhj84GoUpUI4=s48-c-k-c0x00ffffff-no-nd-rj" />
                            <Detail>
                                <Name>Rick Astley</Name>
                                <Counter>3.23M subscribers</Counter>
                                <Description>
                                    The official video for “Never Gonna Give You Up” by Rick Astley
                                    Taken from the album ‘Whenever You Need Somebody’ – deluxe 2CD and digital deluxe out 6th May 2022 Pre-order here – https://RickAstley.lnk.to/WYNS2022ID


                                </Description>
                            </Detail>
                        </ChannelInfo>
                        <Subscribe>SUBSCRIBE</Subscribe>
                    </Channel>
                    <Hr />
                    <Comments />
                </Content>
                <RecommendedVideos>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(index => (
                            <Link to="/video/newId" style={{ textDecoration: 'none' }} key={index}>
                                <RecommendedVideoWrapper >
                                    <RecommendedVideo>
                                        <Thumbnail src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                                        {/* <VideoLength><h1>2:00:22</h1></VideoLength> */}
                                    </RecommendedVideo>
                                    <VideoDetails>
                                        <RecommendedTitle>Lorem ipsum dolor sit amet consectetur...</RecommendedTitle>
                                        <RecommendedChannelName>cool coding</RecommendedChannelName>
                                        <RecommendedInfo>439k views 10 months ago</RecommendedInfo>
                                    </VideoDetails>
                                </RecommendedVideoWrapper>
                            </Link>
                        ))
                    }
                </RecommendedVideos>
            </Container>
        </Layout>
    )
}

export default Video