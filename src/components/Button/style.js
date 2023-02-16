import styled from 'styled-components';

const ButtonMain = styled.button`
    max-width: 260px;
    width: 100%;
    padding: 10px 0;
    color: var(--gray-0);
    border: none;
    border-radius: 4px;
    background-color: var(--color-primary);

    :hover {
        background-color: var(--color-primary-focus);
    }
`

export default ButtonMain