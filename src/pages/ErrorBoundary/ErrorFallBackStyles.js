import styled from "styled-components";

export const FallbackWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    height: 80vh;
    width: fit-content;
    gap: 2rem;
    
    h1 {
        font-size: 3rem;
        font-weight: 400;
    }

    p {
        border: none;
        background: none;
        padding: 1rem;
        font-size: 2rem;
        color: #EC8F5B;

        &:hover {
            cursor: pointer;
            color: #EC8F00;
        }
    }
`;