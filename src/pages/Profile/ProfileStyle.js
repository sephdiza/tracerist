import styled from 'styled-components'

// tablet = 768
// mobile = 320

export const Title = styled.h2`
    margin-left: 20vw;
    margin-top: 15vh;

    @media only screen and (max-width: 1240px) {
        margin-left: 10vw;
    }
`;

export const ProfileWrapper = styled.section`
    margin-left: 20vw;
    margin-right: 20vw;

    display: flex;
    justify-content: space-between;
    font-size: var(--font-size-default);
    color: var(--text-primary);
    overflow-x: hidden;

    @media only screen and (max-width: 1240px) {
        margin-left: 10vw;
        margin-right: 10vw;
    }

    @media screen and (max-width: 1120px) {
        flex-direction: column-reverse;
        align-items: center;
    }
`;

export const RightContainer = styled.div`
    display: flex; 
    flex-direction: column;
`;

export const LeftContainer = styled.div`
    margin-top: 3em;
    display: flex;
    flex-direction: column;
`;

export const ProfileMain = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 6rem;
    width: 46rem;
    gap: 6rem;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 3rem;
        margin-top: 3rem;
    }
`;

export const ProfilePicture = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        font-weight: 500;
        margin-top: 1rem;
        padding: 2px 3px;
        border-radius: 4px;
        font-size: 1.1rem;
        color: #fff;
        display: inline-block;
    }
`;

export const ProfileImgBorder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    background: var(--bg-gradient);
    position: relative;

    img {
        width: 11rem;
        border: .75rem solid #fff;
        border-radius: 50%;
    }
`;

export const ProfileImg = styled.img`
    background: #fff;
    border-radius: 50%;
    width: 20rem;
    height: 20rem;
    padding: 6px;
    position: absolute;
    pointer-events: none;
`;

export const ProfileBtnGrp = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    position: relative;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }
`;

export const AddInfo = styled.p`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    height: fit-content;
    width: fit-content;
    z-index: 99;
    font-size: 1.6rem;
    transform: translateY(7.5rem);

    @media screen and (max-width: 600px) {
        transform: translate(9rem, 13rem);
        font-size: 1.2rem;
    }

    span {
        margin-left: .5rem;
        font-weight: 500;
    }
`;

export const ProfileMainDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media only screen and (min-width: 320px) and (max-width: 600px) {
        margin: 0 12rem;
    }
`;

export const ProfileTable = styled.table`
    all:unset;
    margin-top: 6rem;
    width: 100%;
    text-align: left;
    border: 1px solid rgba(0,0,0,0.1);
    margin-bottom: 3rem;

    tbody,
        td,
        tr,
        th {
        all: unset;
    }

    tbody {
        display: flex;
        flex-direction: column;
        
        /* width: 100%; */
        @media screen and (max-width: 600px) {
            margin-top: 1.5rem;
            margin-left: 5rem;
            margin-right: 5rem;
        }
    }

    tr {
        display: flex;
        /* width: 100%; */
        justify-content: space-between;
        align-items: center;
        height: 3.2rem;
        color: var(--text-primary);
        padding-left: 2rem;      

        &:nth-child(odd) {
            background: linear-gradient(to top right, rgba(236, 143, 91, 0.3), rgba(237, 240, 99, 0.2));
        }

        @media screen and (max-width: 499px) {
            flex-direction: column;
            height: auto;
            padding-left: 0;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
    }

    th {
        font-weight: 500;
        width: 50%;

        @media screen and (max-width: 499px) {
            font-weight: 600;
        }
    }

    td {
        width: 50%;
    }
`;

export const EstabWrapper = styled.section`
    margin-left: 20vw;
    margin-right: 20vw;
    margin-top: 5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size-default);
    color: var(--text-primary);
    overflow-x: hidden;

    @media only screen and (max-width: 1240px) {
        margin-left: 10vw;
        margin-right: 10vw;
    }
`;

export const EstabDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    max-width: 40rem;

    @media only screen and (min-width: 320px) and (max-width: 600px) {
        margin: 0 6rem;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
`;

export const EstabBtnGrp = styled.div`
    display: flex;
    gap: 3rem;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }
`;

