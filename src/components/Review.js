import React from 'react';
import styled from 'styled-components';

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

const Review = (props) => (
    <StyledReview>
        <div className="reviewer">
            <div className="avatar-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxNQULVUPpd_oVlOn1CJT-kRwkWn2gl5X7bzEBQd6xiHruUuhw"
                    alt="Avatar"/>
            </div>
            <div className="reviewer-portfolio">
                <h4>John Doe</h4>
                <p>CEO, Doe Industries</p>
            </div>
        </div>
        <Ratings>
            <StarColumn stars={5} type="stars" score={3} size="small"></StarColumn>
            <div className="gap"></div>
            <RatingBar></RatingBar>
        </Ratings>
    </StyledReview>
);


export default Review;