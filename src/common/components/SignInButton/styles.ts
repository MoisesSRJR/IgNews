import styled from 'styled-components';

export const Button = styled.button`
    height: 3rem;
    border-radius: 3rem;
    background-color: #1f2729;
    border: 0;
    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    font-weight: bold;

    svg {
        width: 20px;
        height: 20px;
    }

    svg:first-child {
        margin-right: 1rem;
    }

    :hover {
        filter: brightness(0.8);
    }

`;
