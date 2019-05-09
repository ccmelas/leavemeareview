import React from 'react'
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledStarColumn = styled.div`
    display: flex;

    span:not(:last-child) img {
        margin-right: 10px;
    }
`;

const StyledImage = styled.img`
    width: ${ (props) => props.size === 'small' ? '18px' : '35px'};
`;

const StarColumn = (props) => {
    const filled = props.score || 0;
    const notFilled = props.stars - filled;

    
    return (
        <StyledStarColumn>
            { 
                [
                    ...buildFilledStars(filled, props.type, props.size),
                    ...buildOpenStars(notFilled, props.type, props.size),
                ]
            }
        </StyledStarColumn>
    );
};

function buildFilledStars(number, type, size) {
    const image = type === 'stars' ? '/images/star-filled.svg' : "/images/favorites.svg";

    return [...Array(number)].map(
        (e, index) => 
            <span key={`filled-${index}`}>
                <StyledImage src={image} alt="Favourite Icon" size={size}/>
            </span>
    );
}

function buildOpenStars(number, type, size) {
    const image = type === 'stars' ? '/images/star-open.svg' : "/images/favorites.svg";
    
    return [...Array(number)].map(
        (e, index) => 
            <span key={`open-${index}`}>
                <StyledImage src={image} alt="Favourite Icon" size={size}/>
            </span>
    );
}

StarColumn.propTypes = {
    stars: PropTypes.number,
    score: PropTypes.number,
}

StarColumn.defaultProps = {
    stars: 0,
    score: 0
}

export default StarColumn;