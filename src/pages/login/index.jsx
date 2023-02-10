import ButtonMain from '../../components/Button/style.js'
import FormLogin from '../../components/Form'
import Section from '../../components/Section/style.js'
import Main from './style.js'

function LoginPage({ navigate }) {
    return (
        <Main>
            <h1>Kenzie Hub</h1>

            <Section>
                <h2>Login</h2>

                <FormLogin navigate={navigate} />

                <h4>Ainda não possui uma conta?</h4>
                <ButtonMain onClick={() => navigate('/register')}>Cadraste-se</ButtonMain>
            </Section>
        </Main>
    )
}

export default LoginPage