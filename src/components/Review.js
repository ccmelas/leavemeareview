import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import StarColumn from './StarColumn';

const StyledReview = styled.section`
    &:hover {
        box-shadow: 1px 1px 4px grey;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        height: 120px;
        box-shadow: 1px 1px 4px grey;
        padding-right: 20px;
        margin-bottom: 20px;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 50px 20px 20px;
    transition: .5s ease-in all;
    border-radius: 5px;

    .reviewer {
        display: flex;
        align-items: center;
    }

    .reviewer-portfolio {
        margin-left: 15px;
    }

    .reviewer-portfolio > * {
        margin: 0;
    }

    .reviewer-portfolio h4 {
        font-family: "Lucida Grande";
        margin-bottom: 2px;
    }

    .reviewer-portfolio h4 a {
        color: black;
        text-decoration: none;
    }

    .reviewer-portfolio p {
        color: grey;
        font-size: 90%;
    }

    .avatar-container {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        box-shadow: 1.5px 1.5px 3px #291C71;
        border: 2px solid #291C71;
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
`;

const Ratings = styled.div`
    display: flex;
    align-items: center;
    .gap {
        width: 20px;
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