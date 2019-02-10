import React from 'react'
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledStarColumn = styled.div`
    display: flex;
`;

const StyledImage = styled.img`
    width: 35px;
    margin-right: 10px;
`;

const StarColumn = (props) => (
    <StyledStarColumn>
        {[...Array(props.stars)].map(
            (e, index) => 
                <span key={index}>
                    <StyledImage src="/images/favorites.svg" alt="Favourite Icon"/>
                </span>
        )}
    </StyledStarColumn>
);

StarColumn.propTypes = {
    stars: PropTypes.number
}

StarColumn.defaultProps = {
    stars: 0
}

export default StarColumn;