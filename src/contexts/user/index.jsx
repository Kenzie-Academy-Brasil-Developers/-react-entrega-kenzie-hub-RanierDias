import { createContext, useEffect, useState } from 'react';
import kenzieHub from '../../services/kenzie-hub.js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({})

function UserProvider({ children }) {
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    async function loginUser(data) {
        try {
            const response = await kenzieHub.post('/sessions', data)
            const { user: { name, course_module: module, techs }, token } = response.data
            const param = name.split(' ').reduce((acc, cur) => acc + cur)

            toast.success(`Bem-vindo de voltar ${name}`)
            localStorage.clear()
            localStorage.setItem('@kenzieHubAuth', JSON.stringify({ token }))

            setUser({ name, module, techs })
            navigate(`/home/${param}`)
        } catch (error) {
            error.response.status == 401 && toast.error('Email ou senha do usuário incorreto', {
                toastId: 3
            })
            error.response.status == 500 && toast.error('Ops, algo deu errado! Tente novamente mais tarde', {
                toastId: 2,
            })
        }
    }

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

            toast.success(`Cadrastro realizado com sucesso ${response.data.name}`)
            navigate('/')
        } catch (error) {
            error.response.status == 404 && toast.error('Recurso não encontrado, tente mais tarde', {
                toastId: 4,
            })
            error.response.data.message == 'Email already exists' && toast.error('O email já é existente!', {
                toastId: 5,
            })
        }
    }

    useEffect(() => {
        const profile = localStorage.getItem('@kenzieHubAuth') && JSON.parse(localStorage.getItem('@kenzieHubAuth'))

        async function autoLogin() {
            const { token } = profile

            try {
                const response = await kenzieHub.get('/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                const { name, course_module: module, techs } = response.data
                const param = name.split(' ').reduce((acc, cur) => acc + cur)

                setUser({ name, module, techs })
                navigate(`/home/${param}`)
            } catch (error) {
                if (error.response.status == 401 || error.response.status == 500) {
                    localStorage.clear()
                    navigate('/')
                }
            }
        }

        profile && autoLogin()
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser, loginUser, registerUser, navigate }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider