import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import star from '../images/star-yellow.svg';
import media from './styles/media';

const StyledStatCard = styled.div`
    width: 200px;
    border-radius: 10px;
    box-shadow: .1rem .1rem .4rem rgba(0, 0, 0, .2);
    margin-bottom: 1rem;
    margin-right: 1rem;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media.tabletPort`
        width: 100%;
    `}



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