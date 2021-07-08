import styled from 'styled-components';

export const InputImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 1.8rem;
    width: 11rem;
    height: 11rem;
    padding: 6px;
    border-radius: 50%;

    &:hover {
        cursor: pointer;
    }
`;

export const InputImg = styled.input`
    display:none;
`;

export const ProfileImg = styled.img`
    background: #fff;
    border-radius: 50%;
    width: 90%;
    height: 90%;
    padding: 6px;
    position: absolute;
    pointer-events: none;
    display: ${({ show }) => (show ? 'flex' : 'none')};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
