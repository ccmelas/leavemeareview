import styled from 'styled-components';

import media from './styles/media';


const Card = styled.section`
    background: white;
    padding: 2rem;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, .2);
    border-radius: 5px;
    width: 25%;
    margin: 5rem 0;

    ${media.tabletPort`
        width: 100%;
        padding: 1rem;
        margin: 5rem auto;
    `}
`;

const StyledProfile = styled.section`

    .image-container {
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        border: .2rem solid ${ props => props.theme.colorWhite };
        box-shadow: .1rem .1rem .4rem rgba(0, 0, 0, .2);
        margin: 0 auto;
    }

    .image-container img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: contain;
    }

    .contact {
        text-align: center;
    }

    h4 {
        font-size: 1.5rem;
        margin: 2rem 0 1rem 0;
        text-transform: uppercase;
    }

    .contact p {
        margin-top: 1rem;
        font-size: 1rem;
        color: ${props => props.theme.colorGrayTwo }
    }

`;

export { StyledProfile, Card };