import styled from 'styled-components'
import bg from '../../assets/images/bg-image.png'

export const Home = styled.section`
    margin: auto;
    max-width:1440px;
    display: flex;
    flex-direction: row;
    height: 100vh;
    position: relative;
    color: var(--text-primary);
    
    @media screen and (max-width: 849px) {
        height: auto;
    }

    @media screen and (max-width: 490px) {
        justify-content: center;
    }

    svg {
        width: 40rem;

        @media screen and (max-width: 490px) {
            width: 32rem;
        }

        @media screen and (max-width: 379px) {
            width: 28rem;
        }
    }

    &:before {
        content: ""; 
        background-image: url(${bg});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.6;
        z-index: -1;

        @media screen and (max-width: 780px) {
            display: none;
        }
    }


    ul {
        margin-top: 1.5rem;
        font-size: 2rem;
        padding-top:5px;
        padding-bottom:10px;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        @media screen and (max-width: 490px) {
            font-size: 1.8rem;
        }

        @media screen and (max-width: 379px) {
            font-size: 1.6rem;
        }

        li {
            list-style: none;
            display: flex;
            max-width: 50rem;

            @media screen and (max-width: 490px) {
                font-size: 2rem;
                max-width: 35rem;
            }

            @media screen and (max-width: 379px) {
                font-size: 1.8rem;
            }

            span {
                width: 3rem;
                display: inline-block;
                margin-right: 1rem;
            }
        }
    }
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 10vw;
    margin-right: 10vw;
    padding-top:5%;
    padding-bottom:5%;

    @media screen and (max-width: 490px) {
        margin-left: 5vw;
        margin-right: 5vw;
    }
`;

export const Subtitle = styled.h1`
        font-size: 2rem;
        font-weight: 500;
        margin-left: 5px;
        font-family: 'Montserrat', sans-serif;
        position: relative;
        transform: translateY(-1rem);

        @media screen and (max-width: 490px) {
            font-size: 1.8rem;
            transform: translateY(-2rem);   
        }

        @media screen and (max-width: 379px) {
            font-size: 1.6rem;
            transform: translateY(-2.5rem); 
        }

        &::after {
            content: '';
            display: block;
            position: absolute;
            margin-top: 3px;
            height: 6px;
            background: linear-gradient(to right, #EC8F5B, #EDF063);
            opacity: 0.6;
            width: 12rem;
            border-radius: 1rem;
        }
`;

export const Heading = styled.h3`
    margin-top: 11rem;
    font-size: 4rem;
    padding-top:10px;
    padding-bottom:5px;

    span {
        font-size: 3.2rem;
        display: inline-block;
    }


    @media screen and (max-width: 490px) {
        margin-top: 3vh;
        font-size: 3.2rem;
    }

    @media screen and (max-width: 379px) {
        font-size: 2.8rem;
    }
`;

export const Subheading = styled.p`
    margin-top: 4rem;
    font-size: 2.4rem;
    max-width: 50rem;

    @media screen and (max-width: 490px) {
        font-size: 2rem;
        max-width: 35rem;
    }

    @media screen and (max-width: 379px) {
        font-size: 1.8rem;
    }
`;

export const BtnGrp = styled.div`
    margin-top: 6rem;
    width:auto;
    display: flex;
    flex-direction: row;
    gap: 3rem;

    @media screen and (max-width: 490px) {
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export const About = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 6rem;
    height:auto;
    width:100%;
    height: 100vh;
    text-align: center;  
`;

export const CardWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    max-width:1440px;
    margin: 20px auto 0;
    margin-top: 6rem;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:2rem;
    justify-content: space-space-evenly;
    max-width:32rem;
    height: 40rem;
    background-color:white;
    transition: transform 0.3s ease;
    box-shadow: 1px 1px 6px #b4b4b4;
    
    border-radius: 1rem;

    h4 {
        font-size: 2.4rem;
        margin-bottom: 1.5rem;
    }

    img {
        width: 20rem;
    }

    p {
        width: 90%;
    }
`;

export const Cta = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 6rem;

    h4 {
        font-size: 2.4rem;
        font-weight: 500;
    }
    
`;