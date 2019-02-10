import React from 'react';
import styled from 'styled-components';

const StyledSeparator = styled.div`
    display: flex;
    color: grey;
    align-items: center;
    width: 100%;

    div {
        flex: 1;
        height: 1px;
        background-color: grey;
    }

    p {
        text-transform: uppercase;
        font-size: 80%;
        padding: 10px;
    }
`;

const Separator = (props) => (
    <StyledSeparator>
        <div></div>
        <p>{props.text}</p>
        <div></div>
    </StyledSeparator>
);

export default Separator;