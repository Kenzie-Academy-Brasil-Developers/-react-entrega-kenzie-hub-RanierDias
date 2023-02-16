import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../contexts/user/index.jsx';

import ButtonMain from '../Button/style.js';
import Form from './style.js';

function FormLogin() {
    const { register, handleSubmit } = useForm()

    const {loginUser} = useContext(UserContext)

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