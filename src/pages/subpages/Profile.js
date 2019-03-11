import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Title from './../../components/Title';
import AuthForm from './../../components/AuthForm';

const StyledProfile = styled.section`
    .image-container {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 2px solid #291C71;
        box-shadow: 1px 1px solid #291C71;
        margin: 0 auto;
    }

    .image-container img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: contain;
    }

    .contact {
        text-align: center;
    }

    h4 {
        font-size: 150%;
        margin-bottom: 0;
    }

    p {
        margin-top: 10px;
    }

`;

const Profile = (props) => (
    <StyledProfile>
        <Title text="My Profile"></Title>
        <AuthForm>
            <div className="image-container">
                <img src={ props.user.avatar }
                    alt="Avatar"/>
            </div>
            <div className="contact">
                <h4>{ props.user.name }</h4>
                <p>{ props.user.email }</p>
            </div>
        </AuthForm>
    </StyledProfile>
);

Profile.propTypes = {
    user: PropTypes.object.isRequired
}

export default Profile;
