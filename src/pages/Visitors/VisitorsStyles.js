import styled from "styled-components";

export const VisitorsTable = styled.table`
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
        height: 3.2rem;
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
            td:nth-of-type(2):before { content: "Email"; }
            td:nth-of-type(3):before { content: "Date"; }
            td:nth-of-type(4):before { content: "Time"; }
            td:nth-of-type(5):before { content: "Contact"; }
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