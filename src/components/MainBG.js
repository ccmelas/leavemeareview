import React from 'react';
import styled from 'styled-components';

const StyledBG = styled.header`
    min-height: 100vh;
    background-image: linear-gradient(130deg, rgba(101, 55, 226, 1) 30%, rgba(41, 28, 113, 0.8)), url('/images/favorite-slanted.svg');
    background-repeat: no-repeat, no-repeat;
    background-position: center, 55vw center;
    background-size: 100%, 70%;
    box-sizing: border-box;

    @media (max-width: 600px) {
        background-position: center, 40vw center;
    }
`;

const MainBG = (props) => (
    <StyledBG>
        {props.children}
    </StyledBG>
);

export default MainBG;