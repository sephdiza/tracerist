import styled from 'styled-components'

export const DbWrapper = styled.section`
    margin-top: 6rem;
    display: flex;
    width: 100%;
    gap: 3rem;
    height: 50rem;
    margin-bottom: 12rem;

    @media screen and (max-width: 840px) {
        flex-direction: column;
        margin-bottom: 60rem;
    }
`;

export const Heading = styled.div`
    display: flex;
    justify-content: space-between;

    h3 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    span {
        font-size: 1.8rem;
    }
`;

export const TotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 3rem;
`;

export const TotalSection = styled.div`
    width: 100%;
    height: 25rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.2);

    img {
        height: 12rem;
        width: 12rem;
        padding: .8rem;
        background-color: #fff;
        border-radius: 50%;
        position: relative;
    }
`;

export const ImgBorder = styled.div`
    height: 12.5rem;
    width: 12.5rem;
    background-image: var(--bg-gradient);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TotalDetails = styled.div`
    display: flex;
    height: 100%;
    width: 20rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-weight: 600;
        font-size: 5rem;
    }
`;

export const TopVisitors = styled.div`
    width: 100%;
    height: 50rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    box-shadow: 0 .5rem .5rem rgba(0, 0, 0, 0.2);

    @media screen and (max-width: 840px) {
        padding: 6rem 0;
    }
`;

export const Title = styled.div`
    text-align: center;
    h3 {
        font-weight: 600;
        font-size: 2.8rem;

        span {
            font-size: 2.4rem;
        }
    }
`;

export const Top5 = styled.div`
    p {
        font-size: 2.4rem;
    }
    p:not(:last-child) {
        padding-bottom: 1rem;
    }

    span {
        font-size: 3rem;
        font-weight: 500;
        padding: 0 2rem;
    }
`;