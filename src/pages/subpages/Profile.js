import React from 'react';
import PropTypes from 'prop-types';

import Title from './../../components/Title';
import { StyledProfile, Card } from '../../components/Profile';

const Profile = (props) => (
    <StyledProfile>
        <Title text="My Profile"></Title>
        <Card>
            <div className="image-container">
                <img src={ props.user.avatar }
                    alt="Avatar"/>
            </div>
            <div className="contact">
                <h4>{ props.user.name }</h4>
                <p>{ props.user.email }</p>
            </div>
        </Card>
    </StyledProfile>
);

Profile.propTypes = {
    user: PropTypes.object.isRequired
}

export default Profile;
