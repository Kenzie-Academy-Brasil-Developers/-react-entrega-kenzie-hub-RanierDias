import styled from 'styled-components';

const Main = styled.main`
    > div {
        padding: 36px 5vw;
        border-bottom: 2px solid var(--gray-3);

        h4 {
            color: var(--gray-1);
        }
    }

    > section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 22px;
        padding: 38px 5vw;

        > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            > button {
                max-height: 36px;
                padding: 8px;
                border: none;
                border-radius: 4px;
                background-color: var(--gray-3);

                > svg {
                    height: 20px;
                    width: 20px;
                    color: var(--gray-0);
                }
            }
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;
            padding: 22px 8px;
            border-radius: 4px;
            background-color: var(--gray-3);

            li:hover {
                cursor: pointer;
                background-color: var(--color-hover);
            }
        }

        button:hover {
            background-color: var(--color-hover);
        }
    }

    @media (min-width: 1024px) {
        > div, section {
            padding: 36px 15vw;
        }
    }
`

export default Main