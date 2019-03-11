import React from 'react';
import styled from 'styled-components';

import Title from '../../components/Title';
import StarColumn from './../../components/StarColumn';

import { DataProvider } from '../../components/DataProvider';

const StyledSingleReview = styled.section`
`;

const ReviewCard = styled.section`
    width: 40%;
    margin: 0 auto;
    box-shadow: 2px 2px 4px grey;
    text-align: center;
    padding: 2em;

    .image-container {
        display: inline-block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid #291C71;
        box-shadow: 1px 1px solid #291C71;
    }

    .image-container img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: contain;
    }

    .rating {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .text-content {
        text-align: left;
        color: #707070;
        font-family: Verdana;
        font-size: 16px;
        line-height: 2em;
        margin-top: 10px;
    }

    .reviewer-signature {
        margin-top: 30px;
        text-align: left;
        font-family: Verdana;
    }

    .reviewer-signature h4 {
        margin-bottom: 0;
    }

    .reviewer-signature p {
        margin-top: 5px;
        font-size: 90%;
        color: #707070;
    }
`;

const SingleReviewDisplay = ({ review }) => (
    <StyledSingleReview>
        <Title text={`Review from ${ review.reviewer.name }`}></Title>

        <ReviewCard>
            <div className="image-container">
                <img src={review.reviewer.avatar || review.reviewer.gravatar}
                    alt="Avatar"/>
            </div>
            <div className="rating">
                <StarColumn stars={5} type="stars" score={review.rating} size="small"></StarColumn>
            </div>
            <div className="text-content">{ review.text }</div>
            <div className="reviewer-signature">
                <h4>{ review.reviewer.name }</h4>
                { review.position && review.company ? <p>{ review.position}, { review.company }</p>: null }
            </div>
        </ReviewCard>
    </StyledSingleReview>
);

const SingleReview = ({match, token}) => (
    <DataProvider url={`/reviews/${match.params.review}`}
            token={token} 
            render={({ data }) => <SingleReviewDisplay review={data.review}/>}/>
);

export default SingleReview;