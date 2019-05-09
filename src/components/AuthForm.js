import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import media from './styles/media';

const Form = styled.form`
    background: white;
    padding: 2rem;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 25%;
    margin: 0 auto;
    position: relative;
    
    ${media.tabletPort`
        width: 40%;
    `}

    ${media.phone`
        width: 90%;
    `}

    div.gap {
        height: 1.5rem;
    }

    h4 {
        color: ${props => props.theme.colorPrimary};
        text-transform: uppercase;
        font-family: ${props => props.theme.fontHeaderTwo};
        font-size: 1.5rem;
        margin-bottom: 3rem;
    }

    p, p a {
        color: grey;
        font-family: Monaco, sans-serif;
        font-size: 1rem;
        margin-top: 2rem;
    }

    p a {
        font-weight: bold;
        text-decoration: none;
    }

    .right {
        text-align: right;
    }

    .d-flex {
        display: flex;
        justify-content: space-between;
    }
`;

const AuthForm = (props) => (
    <Form onSubmit={props.handleSubmit}>
        {props.children}
    </Form>
);

AuthForm.propTypes = {
    handleSubmit: PropTypes.func
};

AuthForm.defaultProps = {
    handleSubmit: () => {}
};

export default AuthForm;