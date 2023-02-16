import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
        max-width: 265px;
        width: 100%;

        label {
            font-size: 0.625rem;
        }

        input {
            width: 100%;
            padding: 10px;
            margin-bottom: 16px;
            color: var(--gray-0);
            border: 2px solid #ffffff00;
            border-radius: 4px;
            background-color: var(--gray-2);

            :focus {
                border: 2px solid var(--gray-0);
            }
        }

        > div {
            position: relative;
            width: 100%;

            select {
                outline: none;
                appearance: none;
                width: 100%;
                padding: 10px;
                color: var(--gray-0);
                border: 2px solid #ffffff00;
                border-radius: 4px;
                background-color: var(--gray-2);
            }

            svg {
                position: absolute;
                right: 8px;
                top: 12px;
            }
        }
    }

    > div + div {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 18px;

        > button {
            background-color: var(--color-primary);

            :hover {
                background-color: var(--color-primary-focus);
            }
        }

        > button + button {
            background-color: var(--gray-1);

            :hover {
                color: var(--gray-2);
                background-color: var(--gray-0);
            }
        }
    }

    .disable {
        background-color: var(--color-primary-disable);
        
        :hover {
            background-color: var(--color-primary-disable);
        }
    }
`

export default Form