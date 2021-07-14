import styled from 'styled-components'

export const Title = styled.h2`
    margin-left: 20vw;
    margin-top: 20vh;

    @media only screen and (max-width: 1240px) {
        margin-left: 10vw;
        margin-top: 15vh;
    }
`;

export const Subtitle = styled.div`
  width: 30rem;
  text-align: center;
  font-weight: 500;
  margin-bottom: 3rem;

  p {
    font-size: 2.4rem;
  }

  span {
    margin-left: 1rem;
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
    margin-top: 8rem;

    @media screen and (max-width: 1240px) {
        margin: 10vw;
    }
`;

export const QrContainer = styled.div`
  width: 40rem;
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

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

export const Rotate = styled.div`
  width: 5rem;
  height: 5rem;
  padding: 1rem;
  border-radius: 50%;
  background-color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  transition: 200ms ease;

  &:hover {
    cursor: pointer;
    opacity: 0.85;
    transform: rotate(180deg);
  }

  svg {
    font-size: 2rem;
    color: #fff;
  }
`;