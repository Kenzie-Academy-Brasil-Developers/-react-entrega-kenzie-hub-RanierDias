import ButtonSmall from '../../components/Button/Small/style.js'
import FormRegister from '../../components/Form/FormRegister'
import Section from '../../components/Section/style.js'
import Main from './style.js'

function RegisterPage({ navigate }) {
    return (
        <Main>
            <div>
                <h1>Kenzie Hub</h1>
                <ButtonSmall onClick={() => navigate('/')}>Voltar</ButtonSmall>
            </div>

            <Section>
                <h2>Crie sua conta</h2>
                <p>Rapido e grátis, vamos nessa</p>

                <FormRegister navigate={navigate} />
            </Section>
        </Main>
    )
}

export default RegisterPage