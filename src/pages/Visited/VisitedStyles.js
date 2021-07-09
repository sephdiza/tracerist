import styled from "styled-components";

export const VisitedTable = styled.table`
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

        &:nth-child(even):not(:first-child) {
            background: linear-gradient(to top right, rgba(236, 143, 91, 0.3), rgba(237, 240, 99, 0.2));
        }

        td {
            font-size: 1.6rem;
            width: 100%;
            text-align: center;
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