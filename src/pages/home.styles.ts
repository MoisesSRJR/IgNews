import styled from 'styled-components';

export const ContentContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    height: calc(100vh - 5rem);

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Hero = styled.div`
    max-width: 600px;

    > span {// > significa que só pegará o primeiro span
        font-size: 1.5rem;
        font-weight: bold;
    }

    h1 {
        font-size: 4.5rem;
        line-height: 4.5rem;
        font-weight: 900;
        margin-top: 2.5rem;

        span {
            color: aqua;
        }
    }

    p {
        font-size: 1.5rem;
        line-height: 2.25rem;
        margin-top: 1.5rem;

        span {
            font-weight: bold;
            color: aqua;
        }
    }
    button {
        margin-top: 2.5rem;
    }
`;