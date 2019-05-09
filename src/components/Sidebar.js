import React from 'react';
import styled from 'styled-components';

import media from './styles/media';


export const StyledSidebar = styled.div`
    min-height: 100vh;
    width: 15%;
    background: ${props => props.theme.colorAccent};
    box-sizing: border-box;
    transition: all .2s ease-in-out;

    ${media.tabletLand`
        width: 20%;
    `}

    ${media.tabletPort`
        width: ${props => props.open ? '100%': '0'};
        position: fixed;
        z-index: 50;
        opacity: ${props => props.open ? 1 : 0 };
    `}
`;

const TogglerStyles = styled.div`
    display: none;
    position: fixed;
    right: 3rem;
    top: 4rem;
    align-items: center;
    justify-content: center;
    width: 2.4rem;
    height: 2.3rem;
    padding: 1.8rem;
    border-radius: 50%;
    background: white;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .2);
    z-index: 200;
    cursor: pointer;


    input[type='checkbox'] {
        display: none;
    }

    label {
        display: inline-block;
        width: 2.3rem;
        height: .15rem;
        background: ${ props => props.theme.colorAccent };
        position: absolute;

        &:before, &:after {
            content: "";
            display: inline-block;
            width: 100%;
            height: .15rem;
            background: inherit;
            left: 0;
            position: absolute;
        }

        &::before {
            transform: translateY(-.5rem);
        }

        &::after {
            transform: translateY(.5rem);
        }
    }

    ${media.tabletPort`
        display: flex;
        right: 1.5rem;
        top: 3rem;
    `}


`;

export const Header = styled.header`
    padding-top: 4em;
    padding-bottom: 2em; 

    .avatar-container {
        width: 8rem;
        height: 8rem;
        border: .2rem solid ${props => props.theme.colorWhite};
        background: #6537E2;
        margin: 0 auto;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, .2);
        border-radius: 50%;
    }
    
    .avatar-container img {
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`;

export const Toggler = (props) => (
    <TogglerStyles>
        <label htmlFor="sidebarToggler"></label>
        <input type="checkbox" id="sidebarToggler" onChange={(e) => props.sidebarOpen && props.sidebarOpen(e.target.checked)}/>
    </TogglerStyles>
);