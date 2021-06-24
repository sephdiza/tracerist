import styled from 'styled-components'

export const Label = styled.label`
    font-weight: bold;
    font-size: 1.2rem;
    display: flex;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
`;

export const Main = styled.div`
    display: block;

    input[type="email"],
    input[type="text"],
    input[type="number"],
    input[type="password"] {
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
    }

    input[type="email"]::placeholder,
    input[type="text"]::placeholder,
    input[type="number"]::placeholder,
    input[type="password"]::placeholder,
    textarea {
      color: var(--text-primary);
      opacity: 0.6;
    }

    input[type="email"],
    input[type="text"],
    input[type="number"],
    input[type="password"],
    textarea {
        width: 30rem;
    }

    select {
        width: 33.4rem;
    }

    select {
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
    }

    [hidden] {
        display: none;
    }

    input:focus,
    select:focus,
    textarea:focus {
        outline: none;
        box-shadow: 0 0 0 4px rgba(236, 143, 91, 0.6);
    }
  
    input:invalid,
    select:invalid,
    textarea:invalid {
        border: 2px solid #ff7d87;
        box-shadow: none;
    }
  
    input[type="checkbox"] {
        display: inline-block;
        height: 2.5rem;
        width: 2.5rem;
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
        margin-top: 1rem;
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

      
    input[type="radio"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 50%;
        border: 2px solid var(--gray-300);
        height: 1rem;
        width: 1rem;
        margin-right: 0.5rem;
        align-self: center;
        justify-content: center;
        position: relative;
        display: flex;
    }

    input[type="radio"]:checked {
        border: 2px solid var(--text-primary);
    }
    
    input[type="radio"]:focus-visible,
    input[type="radio"]:checked:focus-visible {
        border-color: var(--focus-ring-color);
    }

    input[type="radio"]:checked::before {
        content: "";
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        background-color: var(--gray-700);
        align-self: center;
        border-radius: 50%;
    }

    p {
        font-size: 1.6rem;
        display: inline-block;
        align-self: center;
        transform: translateY(-9px);
    }
`;

export const Error = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    color: #e53e3e;
    margin-top: 0.25rem;
`;