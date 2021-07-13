import styled from 'styled-components'

export const TraceWrapper = styled.main`
    margin: 0 10vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 18vh;
    position: relative;

    @media screen and (max-width: 1240px) {
        margin-left: 10vw;
        margin-right: 10vw;
    }

    h3 {
        font-size: 2rem;
        margin: 3rem 0 1rem 0;
    }

    input {
        box-sizing: border-box;
        height: 4rem;
        padding: 1rem 2rem;
        font: inherit;
        font-size: 1.6rem;
        border: 1px solid var(--text-primary);
        background-color: #fff;
        color: var(--text-primary);
        border-radius: 0.5rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        flex: 1;

        &:focus {
            outline: none;
            box-shadow: 0 0 0 4px rgba(236, 143, 91, 0.6);
        }

        &::placeholder {
            text-align: center;
        }
    }
`;

export const Search = styled.div`
    max-width: 40rem;
    display: flex;
    gap: 1rem;
    align-items: center;
`;


export const VisitedTable = styled.table`
    all:unset;
    margin-top: 3rem;
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

    thead {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3.2rem;
        color: var(--text-primary);

        @media screen and (max-width: 760px) {
            display: none;
        }
    }

    tbody {
        display: flex;
        flex-direction: column;
    }

    tr {
        display: flex;
        align-items: center;
        /* height: 3.2rem; */
        color: var(--text-primary);
        width: 100%;
        cursor: pointer;

        &:hover {
            color: gray;
        }

        &:nth-child(even):not(:first-child) {
            background: linear-gradient(to top right, rgba(236, 143, 91, 0.3), rgba(237, 240, 99, 0.2));
        }

        td {
            font-size: 1.6rem;
            width: 100%;
            text-align: center;
            padding: 1rem 0;
        }

        @media screen and (max-width: 760px) {
            flex-direction: column;
            align-items: flex-start;
            height: auto;
            padding-left: 0;
            padding-top: 1rem;
            padding-bottom: 1rem;       

            td {
                width: 90%;
                position: relative;
                padding-left: 30%;
                text-align: left;
                white-space: normal;
                overflow-wrap: break-word;
                padding: 0;
            }

            td:before { 
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                padding-left: 5%;
                font-weight: 500;
	        }   

            td:nth-of-type(1):before { content: "Establishment"; }
            td:nth-of-type(2):before { content: "Location"; }
            td:nth-of-type(3):before { content: "Date"; }
            td:nth-of-type(4):before { content: "Time"; }
            td:nth-of-type(5):before { content: "Contact"; }
        }

        @media screen and (max-width: 640px) {
            td {
                width: auto;
                padding-left: 40%;

                &:before {
                    padding-left: 1rem;
                }
            }
        }
    }

    th {
        font-weight: 500;
        width: 100%;
        text-align: center;
        font-size: 1.4rem;
        text-transform: uppercase;

        &:nth-of-type(1){ width: 20% }
        &:nth-of-type(2){ width: 35% }
        &:nth-of-type(3){ width: 20% }
        &:nth-of-type(4){ width: 15% }
        &:nth-of-type(5){ width: 10% }
    }
`;

export const Loading = styled.section`
    margin-top: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    color: var(--text-primary);

    span {
        margin-left: 2rem;
        display: inline-block;
        animation: spin 1s infinite;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const BtnGrp = styled.div`
    display: flex;
    gap: 2rem;
`;

export const BtnLink = styled.p`
    border-bottom: 1px solid rgba(2, 53, 59, 0.5);
    padding: .5rem .5rem;
    transition: 250ms ease-in-out;

    &:hover {
        cursor: pointer;
        border-bottom: 1px solid #EC8F5B;
        color: #EC8F5B;
    }
`;

export const VisitorsTable = styled.table`
    all:unset;
    margin-top: 3rem;
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

    thead {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--text-primary);

        @media screen and (max-width: 760px) {
            display: none;
        }
    }

    tbody {
        display: flex;
        flex-direction: column;
        
        /* width: 100%; */
        /* @media screen and (max-width: 600px) {
            margin-top: 1.5rem;
            margin-left: 5rem;
            margin-right: 5rem;
        } */
    }

    tr {
        display: flex;
        align-items: center;
        color: var(--text-primary);
        width: 100%;
        cursor: pointer;

        &:hover {
            color: gray;
        }

        &:nth-child(even):not(:first-child) {
            background: linear-gradient(to top right, rgba(236, 143, 91, 0.3), rgba(237, 240, 99, 0.2));
        }

        td {
            font-size: 1.6rem;
            width: 100%;
            text-align: center;
            padding: 1rem 0;
        }

        @media screen and (max-width: 760px) {
            flex-direction: column;
            align-items: flex-start;
            height: auto;
            padding-left: 0;
            padding-top: 1rem;
            padding-bottom: 1rem;       

            td {
                position: relative;
                padding-left: 50%;
                text-align: left;
            }

            td:before { 
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0; 
                white-space: nowrap;
                padding-left: 10%;
                font-weight: 500;
	        }   

            td:nth-of-type(1):before { content: "Name"; }
            td:nth-of-type(2):before { content: "Location"; }
            td:nth-of-type(3):before { content: "Email"; }
            td:nth-of-type(4):before { content: "Contactno"; }
        }

        @media screen and (max-width: 390px) {
            td {
                padding-left: 11rem;

                &:before {
                    padding-left: 2rem;
                }
            }
        }
    }

    th {
        font-weight: 500;
        width: 100%;
        text-align: center;
        font-size: 1.4rem;
        text-transform: uppercase;
    }
`;

export const Searchby = styled.div`
    color: gray;
    margin-top: 3rem;
    font-size: 1.4rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;

    p {
        font-size: 1.4rem;
        display: inline-block;
        padding: .5rem .5rem;
        background-color: gray;
        color: #fff;
        border-radius: 4px;
        transition: 200ms ease;

        &:hover {
            cursor: pointer;
            box-shadow: 0 0 0 1.5px #EC8F5B;
        }

        &:first-child {
            background-color: #EC8F5B;
        }
    }
`;

export const Modal = styled.div`
    position: fixed;
    width: 80%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 99;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 100%);
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 0 80rem rgba(0,0,0,0.5);
    visibility: hidden;
    opacity: 0;
    transition: 150ms ease-in-out;
    border-radius: 1.5rem;
    height: 60%;
    padding-bottom: 3rem;

    span {
        position: absolute;
        height: 1.8rem;
        top: 0;
        right: 0;
        left: 1;
        bottom: 0;
        margin: 2rem;
        font-size: 1.8rem;

        &:hover {
            color: #EC8F5B;
            cursor: pointer;
        }
    }

    div {
        position: absolute;
        right: 1;
        top: 0;
        bottom: 0;
        left: 0;
        margin: 2rem;
        margin-left: 10%;
        font-weight: 500;
        margin-top: 3rem;
        height: fit-content;

        h4 {
            font-size: 1.4rem;
            font-weight: 400;
        }
    }
    
    form {
        display: flex;
        margin-top: 9rem;
        justify-content: center;
        height: fit-content;
    }
`;

export const FilterInputGrp = styled.section`
    display: flex;
    gap: 1rem;

    input {
        transition: all 200ms ease-in-out;

        &[type="submit"]{
            background-color: var(--text-primary);
            color: #fff;
        }

        &:hover {
            cursor: pointer;
            box-shadow: 0 0 0 3px #EC8F5B;
        }
    }
`;

export const ModalTable = styled.table`
    /* reset table css */
    all:unset;
    width: 80%;
    text-align: left;
    border: 1px solid rgba(0,0,0,0.1);
    tbody,
        td,
        tr,
        th {
        all: unset;
    }
    /* reset table css */

    display: flex;
    flex-direction: column;
    margin-top: 9rem;
    overflow-y: scroll;
    height: auto-fit;

    @media screen and (max-width: 1450px) {
            width: 80%;
            overflow-x: scroll;
        }

    thead {
        display: flex;
        width: 100%;

        tr {
            background-color: var(--text-primary);
            color: #fff;
            width: 100%;
            text-align: center;
        }
    }

    tbody {
        display: flex;
        flex-direction: column;
    }
    
    tr {
        display: flex;
        font-size: 1.6rem;
        text-align: center;
    }

    td {
        display: block;
        padding: 1rem;
        border: 1px solid #ccc;
        width: 100%;
        word-wrap: break-word;
    }
`;