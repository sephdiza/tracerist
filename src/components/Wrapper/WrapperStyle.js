import styled from 'styled-components'

export const Wrapper = styled.main`
    margin: 0 20vw;


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1240px) {
        margin-left: 10vw;
        margin-right: 10vw;
    }
`;