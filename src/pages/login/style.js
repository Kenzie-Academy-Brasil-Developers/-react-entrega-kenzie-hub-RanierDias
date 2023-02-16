import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
    padding-top: 80px;
    padding-bottom: 50px;

    h1 {
        color: var(--color-primary);
    }

    section {
        h4 {
            color: var(--gray-1);
            font-weight: 600;
        }

        > button {
            background-color: var(--gray-1);

            :hover {
                color: var(--gray-2);
                background-color: var(--gray-0);
            }
        }
    }

    @media (min-width: 1024px) {
        padding-bottom: 80px;
    }
`

export default Main