import styled from 'styled-components';

const Main = styled.main`
    div {
        padding: 36px 5vw;
        border-bottom: 2px solid var(--gray-3);

        > h4 {
            color: var(--gray-1);
        }
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        padding: 38px 5vw;

        p {
            width: max-content;
        }
    }

    @media (min-width: 1024px) {
        div, section {
            padding: 36px 15vw;
        }

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        section {
            align-items: flex-start;
            gap: 24px;
        }
    }
`

export default Main