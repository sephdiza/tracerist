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