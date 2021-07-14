import styled from 'styled-components'

export const NotifWrapper = styled.div`
    margin-left: 20vw;
    margin-right: 20vw;
    margin-top: 20vh;
    padding-bottom: 10vh;
   
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

export const StatusSection = styled.section`
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    justify-content: center;
    align-items: center;
    width: fit-content;
    text-align: center;

    p {
        width: 20rem;
        margin-bottom: 1rem;

        &:first-child{
            text-align: left;
        }

        &:nth-of-type(1) {
            width: 15rem;
        }
        &:last-child {
            width: 10rem;
        }
    }  
`;

export const StatusHead = styled.p`
    font-size: 1.4rem;
    font-weight: 600;
    color: rgba(0,0,0,0.6)
`;

export const StyledSpan = styled.span`
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: ${({ green }) => (green 
    ? 'green'
    : 'red'
    )};
    padding: 2px .5rem;
    border-radius: 3px;
`;