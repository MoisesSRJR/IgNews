import styled from 'styled-components';

export const Button = styled.button`
    height: 4rem;
    border-radius: 2rem;
    background-color: yellow;
    border: 0;
    width: 264px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: black;
    font-size: 1.25rem;
    font-weight: bold;

    :hover {
        filter: brightness(0.8);
    }
`;
