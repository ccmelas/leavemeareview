import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Loader from "react-loader-spinner";

const StyledButton = styled.button`
    color: ${props => props.scheme === 'google' ? '#FFFFFF': '#6136D8'};
    padding: ${props => props.small ? '.8em' : '1em 2em'};
    text-transform: uppercase;
    font-weight: ${props => props.bold ? 'bold': 'normal'};
    background: ${props => props.scheme === 'google' ? '#C44040': '#EAC93F'};
    border-radius: 5px;
    font-size: ${props => props.small ? '70%' : '80%'};
    letter-spacing: .05em;
    border: 0;
    transition: .5s all ease-in-out;
    font-family: ${props => props.length === 'block' ? 'Verdana, sans-serif' : 'Monaco, sans-serif'};
    cursor: ${props => props.loading ? 'not-allowed': 'pointer'};
    width: ${props => props.length === 'block' ? '100%' : 'auto'};
    :hover {
        color: ${props => props.scheme === 'google' ? '#C44040': '#EAC93F'};;
        background: ${props => props.scheme === 'google' ? '#FFFFFF': '#6136D8'};
    }
    :focus {
        outline: 0;
    }
`;


class Button extends Component {
    render() {
        const { bold, type, small, loading } = this.props;

        return (
            <StyledButton {...this.props}
                disabled={loading ? 'disabled': false}
                bold={Boolean(bold)} 
                small={Boolean(small)} 
                type={type}> 
                {loading ? 'Please wait...' : this.props.children}
            </StyledButton>
        );
    }   
}

Button.propTypes = {
    length: PropTypes.string,
    scheme: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {
    length: 'auto',
    scheme: 'primary',
    type: 'button',
    onClick: () => {}
};

export default Button;