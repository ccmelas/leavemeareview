import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.section`

    margin-top: 2em;

    font-family: Monaco;
    
    a.active, a:hover {
        font-weight: bold;
        color: lightblue;
        background: rgba(0, 0, 0, 0.5);
        border-left: 1px solid #6537E2;
    }

    ul, li {
        display: block;
        margin: 0;
        padding-inline-start: 0;
        margin-block-end: 0;
        margin-block-start: 0;
    }

    a {
        text-decoration: none;
        color: white;
        text-transform: capitalise;
        font-size: 90%;
        padding: 1em 3em;
        display: block;
        width: 100%;
        margin-left: 0;
        box-sizing: border-box;
    }
`;

const Menu = (props) => (
    <StyledMenu>
        {props.children}
    </StyledMenu>
);

export default Menu;