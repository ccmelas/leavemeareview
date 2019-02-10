import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styled from 'styled-components'

const StyledButton = styled.button`
    color: ${props => props.scheme === 'google' ? '#FFFFFF': '#6136D8'};
    padding: ${props => props.length === 'block' ? '.8em' : '1em 2em'};
    text-transform: uppercase;
    font-weight: ${props => props.bold ? 'bold': 'normal'};
    background: ${props => props.scheme === 'google' ? '#C44040': '#EAC93F'};
    border-radius: 5px;
    font-size: 90%;
    letter-spacing: .05em;
    border: 0;
    transition: .5s all ease-in-out;
    font-family: ${props => props.length === 'block' ? 'Verdana, sans-serif' : 'Monaco, sans-serif'};
    cursor: pointer;
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
        const { bold, type } = this.props;

        return (
            <StyledButton {...this.props}
                bold={Boolean(bold)} 
                type={type}> 
                {this.props.children}
            </StyledButton>
        );
    }   
}

Button.propTypes = {
    length: PropTypes.string,
    scheme: PropTypes.string
};

Button.defaultProps = {
    length: 'auto',
    scheme: 'primary',
    type: 'button'
};

export default Button;