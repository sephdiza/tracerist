import styled from 'styled-components'
import leftSideBg from '../../assets/images/left-side.png'
import indivImg from '../../assets/images/individual.png'
import estabImg from '../../assets/images/establishment.png'

export const RegisterWrapper = styled.div`
    display: flex;
    background-color: #fff;
`;

export const LeftWrapper = styled.div`
    height: 100vh; 
    width: 50vw;
    background: linear-gradient(to top right, rgba(236, 143, 91, 0.6), rgba(237, 240, 99, 0.6));
    overflow-x: hidden;

    @media screen and (max-width: 787px) {
        display: none;
    }
`;

export const BgImg = styled.div`
    height: 100%;
    background-image: url(${leftSideBg});
    background-size:     cover;
    background-repeat:   no-repeat;
    background-position: center center;
`;

export const RightWrapper = styled.div`
    height: 100vh; 
    width: 50vw;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;

    @media screen and (max-width: 787px){
        width: 100vw;
    }
`;

export const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 32rem;

    @media screen and (max-width: 1160px) {
        padding: 0 8rem;
    }

    @media screen and (max-width: 400px) {
        padding: 0 1rem;
        margin-left: 1.2rem;
    }
`;

export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    margin: 6rem 0 1rem 0;

    @media screen and (max-width: 542px) {
        margin: 6rem 0 3rem 0;
    }

    @media screen and (max-width: 400px){ 
        margin: 3.5rem 0 0.5rem 0;
    }

    img {
        width: 24rem;
        
        @media screen and (max-width: 1000px) {
            width: 20rem;
        }

        @media screen and (max-width: 400px) {
            width: 16rem;
        }
    }

    p {
        font-size: 1.4rem;
        margin-left: 5px;
        font-family: 'Montserrat', sans-serif;
        position: relative;
        transform: translateY(-1.5rem);

        @media screen and (max-width: 1002px) {
            font-size: 1.2rem;
        }

        @media screen and (max-width: 400px) {
            margin-top: 1.7rem;
            font-size: 1rem;;
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
        }
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    gap: 1rem;

    @media screen and (max-width: 400px) {
        margin-bottom: 1.5rem;
    }

    h1 {
        font-size: 2.8rem;

        @media screen and (max-width: 1000px) {
        font-size: 2.4rem;
        }

        @media screen and (max-width: 400px) {
            font-size: 2rem;
        }
    }

    p {
        margin-top: -2rem;
        font-size: 1.8rem;

        @media screen and (max-width: 1000px) {
        font-size: 1.6rem;
        }

        @media screen and (max-width: 400px) {
        font-size: 1.4rem;
        }
    }
`;

export const SubTitle = styled.div`
    display: flex;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;

    @media screen and (max-width: 1000px) {
        font-size: 1.6rem;
    }

    @media screen and (max-width: 400px) {
        margin-bottom: 1.5rem;
        font-size: 1.2rem;
    }
`;

export const SelectGrp = styled.div`  
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 4rem;

    @media screen and (max-width: 400px) {
        gap: 1.5rem;
    }

    label {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        border: 0.5rem solid #fff;
        box-shadow: 0 0 0 0.3rem #02353B;
        transition: all .2s ease-out;

        @media screen and (max-width: 1160px) {
        width: 6rem;
        height: 6rem;
        }

        @media screen and (max-width: 400px) {
            width: 4rem;
            height: 4rem;
        }
        
        &:first-child {
            background-image: url(${indivImg});
            background-size:     cover;
            background-repeat:   no-repeat;
            background-position: center center;
        }
         
        &:last-child {
            background-image: url(${estabImg});
            background-size:     cover;
            background-repeat:   no-repeat;
            background-position: center center;
        }

        &:hover {
            /* background-color: #02353B; */
            opacity: 0.8;
            cursor: pointer;
        }

        margin-bottom: 4rem;
    }

    input {
        display: none;
        pointer-events: none;
    }
`;

export const LoginLinkText = styled.p`
    color: var(--text-primary);
    font-size: 1.4rem;
    margin-top: 3rem;

    a {
        text-decoration: none;
        color: #EC8F5B;
        font-weight: 500;

        &:hover {
            color: #E37739;
        }
    }
`;
