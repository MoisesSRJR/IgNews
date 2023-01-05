import styled from 'styled-components';

export const HeaderContainer = styled.div`
    height: 5rem;
    border-bottom: 1px solid #29292e;
`;

export const HeaderContent = styled.div`
    max-width: 1200px;
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem;

    display: flex;
    align-items: center;

    nav {
        margin-left: 5rem;
        height: 5rem;

        a{
            display: inline-block;
            position: relative;
            padding: 0 0.5rem;
            height: 5rem;
            line-height: 5rem;
            color: #d3cdcd;

            transition: color 0.2s;

            & + a {
                margin-left: 2rem;
            }

            :hover {
                color: #fff;
            }

            &.active {
                color: #fff;
                font-weight: bold;
            }

            &.active::after {
                content: '';
                height: 3px;
                border-radius: 3px 3px 0 0;
                width: 100%;
                position: absolute;
                bottom: 1px;
                left: 0;
                background-color: yellow;
            }
        }
    }
`;