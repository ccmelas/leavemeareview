import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.section`

    margin-top: 2rem;

    ul, li {
        display: block;
        margin: 0;
        padding-inline-start: 0;
        margin-block-end: 0;
        margin-block-start: 0;
    }

    a, button {
        text-decoration: none;
        text-transform: uppercase;
        color: white;
        text-transform: capitalise;
        font-size: 1.2rem;
        padding: 1rem 15%;
        display: flex;
        align-items: center;
        width: 100%;
        margin-left: 0;
        box-sizing: border-box;
        background: transparent;
        border: 0;
        text-align: left;
        cursor: pointer;
        font-family: ${props => props.theme.fontHeader};
        letter-spacing: .1rem;
        margin-bottom: 2rem;

        svg {
            margin-right: 1rem;
            font-size: 85%;
        }
    }

    a.active, a:hover, button.active, button:hover {
        color: ${ props => props.theme.colorAccent };
        background: ${ props => props.theme.colorWhite };
        border-left: .3rem solid ${ props => props.theme.colorSecondary };
    }

    a:hover svg, button:hover svg {
        color: ${ props => props.theme.colorAccent };
    }
`;

const Menu = (props) => (
    <StyledMenu>
        {props.children}
    </StyledMenu>
);

export default Menu;