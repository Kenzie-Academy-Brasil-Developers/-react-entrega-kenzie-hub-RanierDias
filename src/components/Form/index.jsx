import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import kenzieHub from '../../services/kenzie-hub.js';
import ButtonMain from '../Button/style.js';
import Form from './style.js';

function FormLogin({ navigate }) {
    const { register, handleSubmit } = useForm()

    async function loginUser(data) {
        try {
            const response = await kenzieHub.post('/sessions', data)
            const { user: { name, course_module: module }, token } = response.data

            toast.success(`Bem-vindo de voltar ${name}`)
            localStorage.clear()
            localStorage.setItem('@kenzieHubAuth', JSON.stringify({ name, module, token }))
            navigate('/home')
        } catch (error) {
            error.response.status == 401 && toast.error('Email ou senha do usuário incorreto')
        }
    }

    return (
        <Form onSubmit={handleSubmit(loginUser)}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Digite seu email aqui" {...register('email')} />
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" placeholder="Digite sua senha aqui" {...register('password')} />
            </div>

            <ButtonMain>Entrar</ButtonMain>
        </Form>
    )
}

export default FormLogin