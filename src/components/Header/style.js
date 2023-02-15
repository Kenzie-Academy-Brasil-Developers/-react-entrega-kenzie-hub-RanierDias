import styled from 'styled-components';

const HeardeStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 0;
    border-bottom: 2px solid var(--gray-3);

    h1 {
        color: var(--color-primary);
    }

    button:hover {
        background-color: var(--gray-1);
    }

`

export default HeardeStyled