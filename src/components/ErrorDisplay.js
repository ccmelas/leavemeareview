import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledErrorDisplay = styled.p`
    border: 1px solid red;
    background: rgba(200, 0, 0, .1);
    color: red !important;
    padding: .7em;
    border-radius: 5px;
    margin-bottom: 30px;
`;

const ErrorDisplay = (props) => (
    <StyledErrorDisplay>
        { props.text }
    </StyledErrorDisplay>
);

ErrorDisplay.propTypes = {
    text: PropTypes.string.isRequired
};

export default ErrorDisplay;