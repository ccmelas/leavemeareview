import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    background: white;
    padding: 2em;
    box-shadow: 1px 1px 4px gray;
    border-radius: 5px;
    width: 20%;
    @media (max-width: 600px) {
        width: 70%;
    }
    margin: 0 auto;
    position: relative;
    top: 10em;

    div.gap {
        height: 15px;
    }

    h4 {
        color: #6136D8;
        text-transform: uppercase;
        font-family: Verdana;
        font-size: 80%;
        margin-bottom: 30px;
    }

    p, p a {
        color: grey;
        font-family: Monaco, sans-serif;
        font-size: 80%;
        margin-top: 20px;
    }

    p a {
        font-weight: bold;
        text-decoration: none;
    }
`;

const AuthForm = (props) => (
    <Form>
        {props.children}
    </Form>
);

export default AuthForm;