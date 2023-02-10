import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 46px 0;
    gap: 32px;

    > div {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 370px;
        margin-top: 10px;

        h1 {
            color: var(--color-primary);
        }
    }

    section {
        > p {
            color: var(--gray-1);
        }
    }

    @media (min-width: 1024px) {
        padding: 80px 15vw;
    }
`

export default Main