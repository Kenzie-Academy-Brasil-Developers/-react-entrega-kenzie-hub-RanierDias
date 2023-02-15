import { useContext } from 'react'
import ButtonMain from '../../components/Button/style.js'
import FormLogin from '../../components/Form'
import Section from '../../components/Section/style.js'
import { UserContext } from '../../contexts/user/index.jsx'
import Main from './style.js'

function LoginPage() {
    const { navigate } = useContext(UserContext)

    return (
        <Main>
            <h1>Kenzie Hub</h1>

            <Section>
                <h2>Login</h2>

                <FormLogin />
                
                <h4>Ainda não possui uma conta?</h4>
                <ButtonMain onClick={() => navigate('/register')}>Cadraste-se</ButtonMain>
            </Section>
        </Main>
    )
}

export default LoginPage