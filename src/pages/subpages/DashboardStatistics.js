import React from 'react';
import styled from 'styled-components';

import Title from '../../components/Title';
import Review from '../../components/Review';
import StatCard from '../../components/StatCard';

import { DataProvider } from '../../components/DataProvider';

const FlexRow = styled.div`
    display: flex;
    margin-bottom: 50px;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const DashboardDisplay = ({ reviews, reviewCount }) => (
    <section>
        <FlexRow>
            <StatCard title="Reviews" value={`${reviewCount}`}></StatCard>
        </FlexRow>
        <Title text="Recent Reviews"></Title>
        {reviews.map(review => <Review key={review._id} review={review}></Review>)}
    </section>
);

const DashboardStatistics = ({token}) => (
    <DataProvider url="/dashboard"
            token={token} 
            render={({ data }) => <DashboardDisplay reviews={data.reviews} reviewCount={data.reviewCount}/>}/>
);

export default DashboardStatistics;