import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledNotFound = styled.section`
    height: 70vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h4 {
        font-size: 200%;
    }
`;

const NotFound = (props) => (
    <StyledNotFound>
        <h4>Hey! Seems you are lost, huh <span role="img" aria-label="Lost">🙉</span></h4>
        <Button onClick={() => props.history.goBack()}>Go back ←</Button>
    </StyledNotFound>
);


export default NotFound;
