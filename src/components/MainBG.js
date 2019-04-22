import React from 'react';
import styled from 'styled-components';

import media from './styles/media';

const StyledBG = styled.header`
    min-height: 100vh;
    background-image: linear-gradient(130deg, ${ props => props.theme.colorPrimary } 30%, rgba(41, 28, 113, .9)), url('/images/favorite-slanted.svg');
    background-repeat: no-repeat, no-repeat;
    background-position: center, 55vw center;
    background-size: 100%, 70%;
    display: flex;
    align-items: center;
    /* box-sizing: border-box; */

    ${media.phone`
        padding-right: 1.5rem;
        padding-left: 1.5rem;
    `}
`;

const MainBG = (props) => (
    <StyledBG>
        {props.children}
    </StyledBG>
);

export default MainBG;