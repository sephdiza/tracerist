import styled from 'styled-components'

export const NotifWrapper = styled.div`
    margin-left: 20vw;
    margin-right: 20vw;
    margin-top: 15vh;
   
    @media screen and (max-width: 1120px) {
        align-items: center;
    }

    h2 {
        margin-bottom: 3rem;
    }
`

export const MessageContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 50rem;
    white-space: pre-line;
    

    p:first-child {
        line-height: 100%;
        margin: 0;
        padding: 0;
    }
`;