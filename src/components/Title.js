import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
    color: gray;
    margin-bottom: 30px;
    p {
        text-transform: uppercase;
    }
    border-left: 3px solid #291C71;
    padding-left: 12px;
`;

const Title = (props) => (
    <StyledTitle>
        <p>{props.text}</p>
    </StyledTitle>
);

export default Title;

