import styled from 'styled-components'

export const Title = styled.h2`
    margin-left: 20vw;

    @media only screen and (max-width: 1240px) {
        margin-left: 10vw;
    }
`;


export const Wrapper = styled.main`
    margin: 0 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1240px) {
        margin-left: 10vw;
        margin-right: 10vw;
    }
`;

export const QrContainer = styled.div`
  width: 30rem;
  height: 30rem;
  background-color: aliceblue;
  margin-top: 2rem;
  border-radius: 3rem;
  /* overflow: hidden; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const qrCodeStyle = {
  width: '100%',
}

export const Result = styled.p`
  text-align: center;
  font-size: 1.6rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.3);
  width: 20em;
  height: 5em;
`;