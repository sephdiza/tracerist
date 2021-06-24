import styled from 'styled-components';

export const Button = styled.button`
    height: 4rem;
    width: 20rem;
    border: none;
    border-radius: 0.5rem;
    font-family: Inter;
    font-size: var(--font-size-default);
    border: ${({ primary }) => (primary 
        ? 'none'
        : '1px solid var(--text-primary)'
    )};
    background: ${({ primary }) => (primary 
        ? 'linear-gradient(to top right, rgba(236, 143, 91, 0.6), rgba(237, 240, 99, 0.6))'
        : '#fff'
    )};
    transition: all .2s;

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

export const RegisterBtn = styled.button`
    height: 4rem;
    width: 22rem;
    border: none;
    font-family: Inter;
    font-size: 1.4rem;
    color: #fff;
    background: var(--text-primary);
    transition: all .2s;
    border-radius: 0.5rem;
    position: relative;

    span {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateX(15%);
        font-size: 1.9rem;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: all .15s ease-in;
    }

    &:hover {
        cursor: pointer;
        transform: translateY(-3px);
        box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.2);

        span {
            transform: translateX(40%);
        }
    }

    &:active {
        transform: translateY(-2px);
        box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.2);

        span {
            transform: translateX(60%);
        }
    }
`;