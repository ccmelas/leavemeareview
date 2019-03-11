import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import star from '../images/star-yellow.svg';

const StyledStatCard = styled.div`
    width: 200px;
    border-radius: 10px;
    box-shadow: 1px 1px 4px grey;
    margin-bottom: 10px;
    margin-right: 10px;
    padding: 1em 2em;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .number {
        font-size: 400%;
        height: 100%;
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.8);
        font-family: Verdana;
    }

    .icon {
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .icon img {
        width: 20px;
        margin-bottom: 5px;
    }

    .icon p {
        margin-top: 5px;
        margin-bottom: 0;
        width: 100%;
        text-align: center;
    }
`;

const StatCard = (props) => (
    <StyledStatCard>
        <div className="number">{props.value}</div>
        <div className="icon">
            <img src={star} alt="Star Icon"/>
            <p>{props.title}</p>
        </div>
    </StyledStatCard>
);

StatCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default StatCard;