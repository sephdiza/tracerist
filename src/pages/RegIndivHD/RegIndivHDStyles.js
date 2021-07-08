import styled from 'styled-components'
import { Form } from 'formik'

export const StyledForm = styled(Form)`
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    max-width: 50rem;
    margin: 3rem 0;

    @media screen and (max-width: 1240px) {
        max-width: 36rem;
    }
`;

export const QuestionWrapper = styled.section`
    border: 1px solid rgba(0, 0, 0, 0.25);
    margin-bottom: 3rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-size: 1.8rem;

    @media screen and (max-width: 700px) {
        font-size: 1.6rem;
    }
`;

export const Question = styled.div`
    font-weight: 500;
    margin: 1.5rem 0 3rem 0;
`;

export const SubQuestion = styled.div`
    margin-left: 2.5rem;
    margin-bottom: 1rem;
    margin-top: 1rem;

    p {
        @media screen and (max-width: 700px) {
        font-size: 1.6rem;
    }
    }
`;

export const RadioWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7.5rem;
`;

export const RadioLabel = styled.label`

    [type="radio"] {
    visibility: hidden;
    position: relative;

    }
    [type="radio"]::before { 
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translate(-50%, -20%);
        border: 2.5px solid #fff;
        height: 1.2rem; 
        width: 1.2rem; 
        border-radius: 50%; 
        box-shadow: 0 0 0 1.8px var(--text-primary);
        display: block;
        content: " ";
        cursor: pointer;
        transition: all 300ms ease;
        visibility: visible;
    }

    [type="radio"]:checked::before { /* selected */
        background: var(--text-primary);
    }

    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    p {
        margin-left: 1rem;

        
        @media screen and (max-width: 700px) {
        font-size: 1.6rem;
        }
    }
`;

export const CheckboxLabel = styled.label`
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;

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
        height: 12rem;
        width: 80%;
        overflow: auto;
    }
`;

export const Error = styled.div`
    font-size: 1.4rem;
    font-weight: 500;
    color: #e53e3e;
    margin-top: 1rem;
`;