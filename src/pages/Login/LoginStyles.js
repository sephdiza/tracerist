import styled from 'styled-components'
import leftSideBg from '../../assets/images/left-side.png'

export const LoginWrapper = styled.div`
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

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 42rem;

    @media screen and (max-width: 1160px) {
        padding: 0 8rem;
    }

    @media screen and (max-width: 400px) {
        padding: 0 6rem;
        margin-left: 1.2rem;
    }
`;

export const Banner = styled.div`
    display: flex;
    flex-direction: column;
    margin: 6rem 0 6rem 0;

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

        @media screen and (max-width: 1002px) {
            font-size: 1.2rem;
        }

        @media screen and (max-width: 400px) {
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
    margin-bottom: 3rem;

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
        font-size: 1.8rem;

        @media screen and (max-width: 1000px) {
            font-size: 1.6rem;
        }

        @media screen and (max-width: 400px) {
            font-size: 1.4rem;
        }
    }
`;

export const InputGroup = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 3rem;
    
    @media screen and (max-width: 400px) {
        gap: 1.5rem;
    }

    input:not(:last-child) {
        box-sizing: border-box;
        width: 100%;
        height: 4rem;
        padding: 1rem 2rem;
        font: inherit;
        font-size: 1.6rem;
        border: 1px solid var(--text-primary);
        background-color: #fff;
        color: var(--text-primary);
        border-radius: 0.5rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;

        &:focus {
            outline: none;
            box-shadow: 0 0 0 4px rgba(236, 143, 91, 0.6);
        }
    }
`;

export const LoginLinkText = styled.div`
    color: var(--text-primary);
    font-size: 1.4rem;
    /* margin: 3rem 0; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;

    a {
        text-decoration: none;
        color: #EC8F5B;
        font-weight: 500;

        &:hover {
            color: #E37739;
        }
    }
`;

export const LoginBtn = styled.input`
    height: 4rem;
    width: 20rem;
    border: none;
    font-family: Inter;
    font-size: 1.4rem;
    color: #fff;
    background: var(--text-primary);
    transition: all .2s;
    border-radius: 0.5rem;
    position: relative;

    &:hover {
        cursor: pointer;
        transform: translateY(-3px);
        box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.2);
    }

    &:active {
        transform: translateY(-2px);
        box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.2);
    }
`;