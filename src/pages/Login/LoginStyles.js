import styled from 'styled-components'
import leftSideBg from '../../assets/images/left-side.png'
import indivImg from '../../assets/images/individual.png'
import estabImg from '../../assets/images/establishment.png'

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
    margin-bottom: 3rem;
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

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    
    

    @media screen and (max-width: 400px) {
        gap: 1.5rem;
    }

    input {
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
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4.5rem;

    a {
        text-decoration: none;
        color: #EC8F5B;
        font-weight: 500;

        &:hover {
            color: #E37739;
        }
    }
`;

export const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;

    input[type="checkbox"] {
        display: inline-block;
        height: 2rem;
        width: 2rem;
        /* font-size: 5rem; */
        border-radius: 5px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: 1px solid var(--text-primary);
        background-color: white;
        /* align-items: center; */
        /* justify-content: center; */
        margin-right: 0.6rem;

        &:focus {
        outline: none;
        box-shadow: 0 0 0 4px rgba(236, 143, 91, 0.6);
    }
    }

    input[type="checkbox"]:hover {
        cursor: pointer;
    }
    
    input[type="checkbox"]:checked {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="78.369" height="78.369" viewBox="0 0 78.369 78.369"><path fill="white" d="M78.05 19.015l-48.592 48.59c-.428.43-1.12.43-1.548 0L.32 40.016c-.427-.426-.427-1.12 0-1.547l6.704-6.704c.428-.427 1.12-.427 1.548 0l20.113 20.112 41.113-41.113c.43-.427 1.12-.427 1.548 0l6.703 6.704c.427.427.427 1.12 0 1.548z"/></svg>');
        background-size: contain;
        background-color: rgba(236, 143, 91, 1);
        border: 1px solid var(--text-primary);
    }
    
    input[type="checkbox"]:focus-visible,
    input[type="checkbox"]:checked:focus-visible {
        border-color: rgba(236, 143, 91, 1);
    }

    p { 
        display: inline-block;
        font-size: 1.4rem;
        cursor: pointer;
        margin-left: 0.5rem;
    }
`;