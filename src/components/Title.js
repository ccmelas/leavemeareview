import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
    color: gray;
    margin-top: 50px;
    margin-bottom: 30px;
    p {
        text-transform: uppercase;
    }
`;

const Title = (props) => (
    <StyledTitle>
        <p>{props.text}</p>
    </StyledTitle>
);

export default Title;

