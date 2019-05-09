import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import StarColumn from './StarColumn';
import media from './styles/media';

const StyledReview = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 50px 20px 20px;
    transition: .5s ease-in all;
    border-radius: 5px;

    ${media.tabletPort`
        flex-direction: column;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, .2);
        padding-right: 20px;
        margin-bottom: 20px;
    `}

    &:hover {
        box-shadow: 1px 1px 4px rgba(0,0,0, .2);
    }

    .reviewer {
        display: flex;
        align-items: center;


        ${media.tabletPort`
            flex-direction: column;
        `}
    }

    .reviewer-portfolio {
        margin-left: 15px;
    }

    .reviewer-portfolio > * {
        margin: 0;
    }

    .reviewer-portfolio h4 {
        font-family: ${props => props.theme.fontHeader };
        margin-bottom: 2px;
        ${media.tabletPort`
            margin-top: 1rem;        
            margin-bottom: .5rem;        
        `}
    }

    .reviewer-portfolio h4 a {
        color: black;
        text-decoration: none;
        &:hover {
            color: ${props => props.theme.colorAccent }
        }
    }

    .reviewer-portfolio p {
        color: ${props => props.theme.colorGrayBase };
        font-size: 90%;
        ${media.tabletPort`
            text-align: center;
        `}
    }

    .avatar-container {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        box-shadow: .1rem .1rem .3rem rgba(0, 0, 0, .2);
        border: .1rem solid ${ props => props.theme.colorWhite };
    }

    .avatar-container img {
        width: 100%;
        height: 100%;
        object-fit: contain;   
        border-radius: 50%;
    }
`;

const RatingBar = styled.div`
    width: 80px;
    height: 8px;
    border-radius: 5px;
    background: red;

    ${media.tabletPort`
        display: none;
    `}
`;

const Ratings = styled.div`
    display: flex;
    align-items: center;
    ${media.tabletPort`
        margin-top: 1.5rem;
    `}
    .gap {
        width: 2rem;
        ${media.tabletPort`
            display: none;
        `}
    }
`;

const Review = ({ review }) => (
    <StyledReview>
        <div className="reviewer">
            <div className="avatar-container">
                <img src={review.reviewer.avatar || review.reviewer.gravatar}
                    alt="Avatar"/>
            </div>
            <div className="reviewer-portfolio">
                <h4>
                    <Link to={`/dashboard/reviews/${review._id}`}>{ review.reviewer.name }</Link>
                </h4>
                { review.position && review.company ? <p>{ review.position}, { review.company }</p>: null }
            </div>
        </div>
        <Ratings>
            <StarColumn stars={5} type="stars" score={review.rating} size="small"></StarColumn>
            <div className="gap"></div>
            <RatingBar></RatingBar>
        </Ratings>
    </StyledReview>
);

Review.propTypes = {
    review: PropTypes.object.isRequired
};


export default Review;