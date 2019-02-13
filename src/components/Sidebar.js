import React from 'react';
import styled from 'styled-components';

import avatar from '../images/favorites.svg';

const StyledSidebar = styled.div`
    min-height: 100vh;
    width: 15%;
    background: #291C71;
    box-sizing: border-box;

    @media (max-width: 600px) {
        width: 100%;
        display: none;
    }
`;

const Header = styled.header`
    padding-top: 4em;
    padding-bottom: 2em; 

    .avatar-container {
        width: 70px;
        height: 70px;
        border: 5px solid #6537E2;
        background: #6537E2;
        margin: 0 auto;
        box-shadow: 1px 1px 4px black;
        border-radius: 50%;
    }
    
    .avatar-container img {
        width: 100%;
        object-fit: cover;
    }
`;


const Sidebar = (props) => (
    <StyledSidebar>
        <Header>
            <div className="avatar-container">
                <img className="avatar" src={avatar} alt="Avatar"/>
            </div>
        </Header>
        { props.children }
    </StyledSidebar>    
);

export default Sidebar;