import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import MainBG from './../components/MainBG';
import StarColumn from './../components/StarColumn';
import Button from './../components/Button';

import media from '../components/styles/media';

const TextContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5rem;
    align-items: flex-start;

    h1 {
        color: ${props => props.theme.colorSecondary };
        font-size: 5rem;
        font-family: ${props => props.theme.fontHeader};
        margin-bottom: 1.6rem;
        ${media.tabletPort`
            font-size: 3.5rem;
        `}
    }

    p {
        color: white;
        font-family: Monaco, sans-serif;
        width: 55%;
        font-size: 1.4rem;
        margin-top: 2rem;
        line-height: 2.5rem;
        margin-bottom: 5rem;
        ${media.phone`
            width: 100%;
        `}
    }

    ${media.phone`
        margin-left: 2rem;
    `}
`;

const Home = () => (
    <MainBG>
        <TextContainer>
            <h1>Leave me a review</h1>
            <StarColumn stars={5}></StarColumn>
            <p>
                Get verifiable reviews from your clients for those 
                awesome projects you’ve skillfully executed.
            </p>
            <Link to="/login">
                <Button>GET STARTED</Button>
            </Link>
        </TextContainer>
    </MainBG>
);

export default Home;