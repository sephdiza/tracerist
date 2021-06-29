import styled from 'styled-components';

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;

    @media screen and (max-width: 400px) {
        margin-bottom: 1.5rem;
    }

    h1 {
        font-size: 2.4rem;
        display: flex;
        align-items: center;

        svg {
            fill: #02353B;
            margin-right: 1rem;
        }

        @media screen and (max-width: 1000px) {
            font-size: 2rem;
        }

        @media screen and (max-width: 400px) {
            font-size: 2rem;
        }
    }

    p {
        font-size: 1.8rem;
        position: relative;

        &:not(:last-child) {
            padding-bottom: 4.5rem;

            &:after {
                    content: '';
                    display: block;
                    position: absolute;
                    margin-top: .5rem;
                    height: .6rem;
                    border-radius: 5px;
                    background: linear-gradient(to right, #EC8F5B, #EDF063);
                    opacity: 0.75;
                    width: 12rem;
            }
        }
       
        @media screen and (max-width: 1000px) {
        font-size: 1.6rem;
        }

        @media screen and (max-width: 400px) {
        font-size: 1.4rem;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    max-width: 36rem;
    margin: 3rem 0;
`;

export const Input = styled.input`
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

    &::placeholder {
        font-size: 1.6rem;
        opacity: 0.8;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 4px rgba(236, 143, 91, 0.6);
    }
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

export const SelectLabel = styled.label`
    font-weight: bold;
    font-size: 1.2rem;
    display: flex;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
`;

export const CheckboxLabel = styled.label`
    margin-top: 1.5rem;
    display: flex;
    align-items: center;

    input[type="checkbox"] {
        display: inline-block;
        height: 2.4rem;
        width: 2.4rem;
        /* font-size: 5rem; */
        border-radius: 5px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border: 1px solid var(--text-primary);
        background-color: white;
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
        font-weight: 600;
        display: inline-block;
        font-size: 1.6rem;
        cursor: pointer;
        margin-left: 1rem;
    }
`;

export const Error = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    color: #e53e3e;
    margin-top: 0.25rem;
`;


export const BtnWrap = styled.div`
    margin: 3rem auto;
    display: flex;

    button {
        font-weight: 600;
    }
`;