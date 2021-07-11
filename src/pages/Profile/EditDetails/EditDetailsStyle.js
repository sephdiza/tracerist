import styled from 'styled-components'
import { Formik } from 'formik'

export const EditDetailsWrapper = styled.section`
    margin-left: 20vw;
    margin-right: 20vw;

    margin: 0 auto;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30rem;

    @media screen and (max-width: 325px) {
        width: 26rem;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const EditInput = styled.input`
    width: 30rem;
    padding: 1rem 1.5rem;
    font: inherit;
    font-size: 1.8rem;
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

    @media screen and (max-width: 325px) {
        width: 26rem;
    }
`;

export const InputGroup = styled.div`
    width: 30rem;
    display: flex;
    gap: 0.6rem;

    @media screen and (max-width: 325px) {
        width: 26rem;
    }

    & input:first-child {
        width: 30%;
    }

    & input:last-child {
        width: 70%;
    }
`;

export const InputGroupHalf = styled.div`
    width: 30rem;
    display: flex;
    gap: 0.6rem;

    @media screen and (max-width: 325px) {
        width: 26rem;
    }

    & input:first-child {
        width: 50%;
    }

    & input:last-child {
        width: 50%;
    }
`;

export const AddressWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    
    & input {
        margin-bottom: .4rem;
    }
`;

export const Label = styled.label`
    font-weight: bold;
    font-size: 1.2rem;
    display: flex;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
`;

export const BtnWrap = styled.div`
    margin: 1.5rem auto;
    display: flex;
`;

export const StyledSelect = styled.select`
    width: 30rem;
    margin: 0;
    -webkit-appearance: none;
    box-sizing: border-box;
    padding: 1rem 1.5rem;
    font-size: 1.8rem;
    border: 1px solid var(--text-primary);
    border-radius: 0.5rem;
    color: var(--text-primary);
    height: auto;
    background-color: #fff;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125.304 125.304"><path d="M62.652 103.895L0 21.41h125.304" fill="02353B"/></svg>');
    background-repeat: no-repeat;
    background-size: 1.4rem;
    background-position: center right 0.5rem;
    word-break: break-all;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 4px rgba(236, 143, 91, 0.6);
    }
`;

export const Error = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    color: #e53e3e;
    margin-top: 0.25rem;
`;