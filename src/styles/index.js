import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-disable: #59323F;
        --sucess: #3FE864;
        --error: #E83F5B;
        --gray-0: #F8F9FA;
        --gray-1: #868E96;
        --gray-2: #343B41;
        --gray-3: #212529;
        --gray-4: #121214;

        --title-1: 1.125rem;
        --title-2: 1rem;
        --title-3: 0.875rem;
        --headline: 0.75rem;
    }

    #root {
        width: 100%;
        margin: 0 auto;
        font-family: 'Inter', sans-serif;
        color: var(--gray-0);

        h1 {
            font-size: var(--title-1);
        }
        h2 {
            font-size: 0.875rem;
        }
        h3 {
            font-size: 0.75rem;
        }
        h4, p {
            font-size: 0.625rem;
        }

        header, footer {
            padding-right: 5vw;
            padding-left: 5vw;
            margin: 0 auto;
        }
    }

    body {
        background-color: var(--gray-4);
    }

    @media (min-width: 1024px) {
        #root {
            h1 {
            font-size: var(--title-1);
            }
            h2 {
                font-size: var(--title-2);
            }
            h3 {
                font-size: var(--title-3);
            }
            h4, p {
                font-size: 0.875rem;
            }

            header, footer {
                padding-right: 15vw;
                padding-left: 15vw;
            }
        }
    }
`

export default GlobalStyle