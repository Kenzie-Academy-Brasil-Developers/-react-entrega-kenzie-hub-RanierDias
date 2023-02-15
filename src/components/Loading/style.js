import styled from 'styled-components'

const Loading = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 20px;

    > div {
        height: 50px;
        width: 50px;
        animation: loading 3s infinite;
    }

    @keyframes loading {
        0% {
            border-radius: 50%;
            background-color: gray;
        }
        25% {
            transform: rotate(180deg);
            border-radius: 0;
            background-color: white;
        }
        75% {
            transform: rotate(0deg);
            border-radius: 50%;
            background-color: crimson;
        }
        100% {
            transform: rotate(90deg);
            border-radius: 0;
            background-color: blue;
        }
    }
`

export default Loading