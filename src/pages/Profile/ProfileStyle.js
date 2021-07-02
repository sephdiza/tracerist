import styled from 'styled-components'
import avatar from "../../assets/images/profile-pic.png"

// tablet = 768
// mobile = 320

export const ProfileWrapper = styled.section`
    margin-left: 20vw;
    margin-right: 20vw;

    display: flex;
    justify-content: space-between;
    font-size: var(--font-size-default);
    color: var(--text-primary);
    overflow-x: hidden;

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
    /* gap: 1rem; */

    h3 {
        font-weight: bolder;
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
        width: 10.5rem;
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

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
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