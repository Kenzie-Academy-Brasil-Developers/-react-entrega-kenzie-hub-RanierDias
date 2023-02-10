import { MdArrowDropDown } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

import Form from '../style.js'
import ButtonMain from '../../Button/style.js'
import kenzieHub from '../../../services/kenzie-hub.js';
import { toast } from 'react-toastify';

const schema = yup.object({
    name: yup.string().required('O nome é obrigatório'),
    email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
    password: yup.string().matches(
        /(?=.*[!-@])(?=.*[a-z])(?=.*[A-Z]).{8,}/g,
        'A senha deve conter um ou mais caracteres especiais ou numeros, letras maiúsculas, e no mínimo 8 caracteres')
        .required('A senha é obrigatória'),
    valid_password: yup.string()
        .oneOf([yup.ref('password')], 'As senhas não devem ser distintas')
        .required('A confirmação da senha é obrigatória'),
    bio: yup.string().required('Vamos lá, tente ao menos dizer seu hobbie'),
    contact: yup.string().matches(/[0-9]/, 'Apenas número de celular').required('O contato é obrigarório'),
    course_module: yup.string().required('Selecione um dos módulos abaixo'),
}).required()

function FormRegister({ navigate }) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    async function registerUser(data) {
        let { name, email, password, bio, contact, course_module } = data

        switch (course_module) {
            case '1':
                course_module = '1º módulo: Front-end Vanilla'
                break;
            case '2':
                course_module = '2º módulo: Front-end Intermediário (API\'s)'
                break;
            case '3':
                course_module = '3º módulo: Front-end Avançado (Bibliotecas e React)'
                break;
            case '4':
                course_module = '4º módulo: Back-end (Estruturação de API\'s)'
                break;
            case '5':
                course_module = '5º módulo: Back-end Avançado'
                break;
            case '6':
                course_module = '6º módulo: Construção de sites em grupo'
                break;
        }

        try {
            const user = { name, email, password, bio, contact, course_module }
            const response = await kenzieHub.post('/users', user)

            toast.success('Cadrastro realizado com sucesso')
            navigate('/')
        } catch (error) {
            error.response.status == 404 && toast.error('Recurso não encontrado, tente mais tarde')
            error.response.data.message == 'Email already exists' && toast.error('O email já é existente!')
        }
    }

    console.log(errors)

    return (
        <Form onSubmit={handleSubmit(registerUser)}>
            <div>
                <label htmlFor="name">Nome</label>
                <p>{errors.name?.message}</p>
                <input type="text" id="name" placeholder="Digite aqui seu nome" {...register('name')} />

                <label htmlFor="email">Email</label>
                <p>{errors.email?.message}</p>
                <input type="Text" id="email" placeholder="Digite aqui seu email" {...register('email')} />

                <label htmlFor="password">Senha</label>
                <p>{errors.password?.message}</p>
                <input type="password" id="password" placeholder="Digite aqui sua senha" {...register('password')} />

                <label htmlFor="valid_password">Confirmar senha</label>
                <p>{errors.valid_password?.message}</p>
                <input type="password" id="valid_password" placeholder="Digite novamente sua senha" {...register('valid_password')} />

                <label htmlFor="bio">Bio</label>
                <p>{errors.bio?.message}</p>
                <input type="text" id="bio" placeholder="Fale sobre você" {...register('bio')} />

                <label htmlFor="contact">Contato</label>
                <p>{errors.contact?.message}</p>
                <input type="text" id="contact" placeholder="Opção de contato" {...register('contact')} />

                <label htmlFor="module">Selecione o módulo</label>
                <p>{errors.course_module?.message}</p>
                <div>
                    <select id="module" {...register('course_module')}>
                        <option value="">Selecionar Módulo</option>
                        <option value="1">Primeiro Módulo</option>
                        <option value="2">Segundo Módulo</option>
                        <option value="3">Terceiro Módulo</option>
                        <option value="4">Quarto Módulo</option>
                        <option value="5">Penúltimo Módulo</option>
                        <option value="6">Último Módulo</option>
                    </select>

                    <MdArrowDropDown />
                </div>
            </div>

            <ButtonMain className={Object.values(errors).length > 0 ? "disable" : ''}
            >Cadastrar</ButtonMain>
        </Form>
    )
}

export default FormRegister