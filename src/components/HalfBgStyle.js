import styled from 'styled-components'
import leftSideBg from '../assets/images/left-side.png'

export const MainWrapper = styled.div`
    display: flex;
    background-color: #fff;
`;

export const LeftWrapper = styled.div`
    height: 100vh; 
    width: 50vw;
    background: linear-gradient(to top right, rgba(236, 143, 91, 0.6), rgba(237, 240, 99, 0.6));
    overflow-x: hidden;

    @media screen and (max-width: 787px) {
        display: none;
    }
`;

export const BgImg = styled.div`
    height: 100%;
    background-image: url(${leftSideBg});
    background-size:     cover;
    background-repeat:   no-repeat;
    background-position: center center;
`;

export const RightWrapper = styled.div`
    height: 100vh; 
    width: 50vw;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;

    @media screen and (max-width: 787px){
        width: 100vw;
    }
`;