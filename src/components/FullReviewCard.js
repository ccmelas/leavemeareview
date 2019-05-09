import styled from 'styled-components';

import media from './styles/media';

const StyledSingleReview = styled.section`
`;

const ReviewCard = styled.section`
    width: 40%;
    margin: 5rem auto;
    box-shadow: .1rem .1rem .4rem rgba(0, 0, 0, .2);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: .5rem;

    ${media.tabletPort`
        width: 100%;
        padding: 1rem;
    `}

    .image-container {
        display: inline-block;
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        border: .2rem solid ${ props => props.theme.colorWhite };
        box-shadow: .1rem .1rem .4rem rgba(0, 0, 0, .2);
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
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .text-content {
        text-align: left;
        color: ${props => props.theme.colorGrayTwo };
        font-family: ${props => props.theme.fontHeaderTwo};
        font-size: 1.5rem;
        line-height: 2em;
        margin-top: 1rem;
    }

    .reviewer-signature {
        margin-top: 3rem;
        text-align: left;
        font-family: ${props => props.theme.fontHeaderTwo};
    }

    .reviewer-signature h4 {
        margin-bottom: 0;
    }

    .reviewer-signature p {
        margin-top: .5rem;
        font-size: 90%;
        color: ${props => props.theme.colorGrayTwo};
    }
`;

export { ReviewCard, StyledSingleReview };