import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import MainBG from './../components/MainBG';
import StarColumn from './../components/StarColumn';
import Button from './../components/Button';

const TextContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15vw;
    align-items: flex-start;

    h1 {
        color: #EAC93F;
        font-size: 300%;
        font-family: 'Lucida Grande', sans-serif;
        margin-bottom: 15px;
    }

    p {
        color: white;
        font-family: Monaco, sans-serif;
        width: 55%;
        font-size: 115%;
        margin-top: 40px;
        line-height: 35px;
        margin-bottom: 50px;
    }

    @media (max-width: 600px) {
        margin-left: 5vw;
        p {
            width: 100%;
        }
        h1 {
            font-size: 200%;
        }
    }
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