import React from 'react';

import Title from '../../components/Title';
import Review from '../../components/Review';
import { DataProvider } from '../../components/DataProvider';


const ReviewsDisplay = ({ reviews }) => (
    <section>
        { reviews.map(review => <Review key={review._id} review={review}></Review>)}
    </section>
);

const Reviews = ({ token }) => (
    <section>
        <Title text="My Reviews"></Title>
        <DataProvider url="/reviews"
                    token={token}
                    render={({ data }) => <ReviewsDisplay reviews={data.reviews}/>}/>        
    </section>
);

export default Reviews;