import React from 'react';

import Title from '../../components/Title';
import StarColumn from './../../components/StarColumn';
import { StyledSingleReview, ReviewCard } from '../../components/FullReviewCard';

import { DataProvider } from '../../components/DataProvider';


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