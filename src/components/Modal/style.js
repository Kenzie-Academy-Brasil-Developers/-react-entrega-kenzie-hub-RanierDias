import styled from 'styled-components';

const Div = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    width: 100%;
    background-color: #212121c1;

    > div {
        display: flex;
        flex-direction: column;
        gap: 18px;
        max-width: 370px;
        width: 90%;
        border-radius: 4px;
        overflow: hidden;
        background-color: var(--gray-3);

        > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 16px;
            background-color: var(--gray-2);

            > button {
                color: var(--gray-0);
                border: none;
            }
        }

        > form {
            padding: 0 12px;
            margin-bottom: 25px;
        }
    }
`

export default Div