import styled from 'styled-components'

export const Title = styled.h2`
    margin-left: 20vw;

    @media only screen and (max-width: 1240px) {
        margin-left: 10vw;
    }

    margin-bottom: 3rem;
`;

export const Subtitle = styled.div`
  width: 30rem;
  text-align: center;
  font-weight: 500;
  /* animation: bounce 1s infinite; */

  span {
    display: inline-block;
    animation: bounce 1s infinite;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const Wrapper = styled.main`
    margin: 0 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1240px) {
        margin-left: 10vw;
        margin-right: 10vw;
    }
`;

export const QrContainer = styled.div`
  width: 30rem;
  height: 30rem;
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
  font-size: 1.8rem;
  color: var(--text-primary);
`;

export const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`;