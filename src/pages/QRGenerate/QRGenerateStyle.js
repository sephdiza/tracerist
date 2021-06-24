import styled from 'styled-components'

export const QRCodeWrapper = styled.div`
    display: ${({ show }) => (show ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    display: block;
    padding: 1rem 2rem;
    width: 20rem;
    margin: 0 auto;

    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`;