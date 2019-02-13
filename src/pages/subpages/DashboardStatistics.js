import React from 'react';
import styled from 'styled-components';

import Title from '../../components/Title';
import Review from '../../components/Review';
import StatCard from '../../components/StatCard';

const FlexRow = styled.div`
    display: flex;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const DashboardStatistics = (props) => (
    <section>
        <FlexRow>
            <StatCard title="Reviews"></StatCard>
            <StatCard title="Views"></StatCard>
        </FlexRow>
        <Title text="Recent Reviews"></Title>
        <Review></Review>
        <Review></Review>
        <Review></Review>
        <Review></Review>
        <Review></Review>
    </section>
);

export default DashboardStatistics;