import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import Modal from '../../components/Modal';
import kenzieHub from '../../services/kenzie-hub';
import { UserContext } from '../user';

export const TechsContext = createContext({})

function TechsProvider({ children }) {
    const [modal, setModal] = useState({ open: false, title: undefined })
    const [techCached, setTechCached] = useState({})
    const { user, user: { techs }, setUser } = useContext(UserContext)

    async function techCreate(data) {
        try {
            const { token } = JSON.parse(localStorage.getItem('@kenzieHubAuth'))
            const response = await kenzieHub.post('/users/techs', data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            toast.success(`${response.data.title} foi adicionado as suas tecnologias`)
            setUser({ ...user, techs: [...techs, response.data] })
        } catch (error) {
            if (error.response.status === 401) {
                toast.warning('Essa tecnologia já foi cadastrada! Tente outra ou atualize clicando nela', {
                    toastId: 1,
                })
            } else {
                toast.error('Ops, algo deu errado! Tente novamente mais tarde', {
                    toastId: 2,
                })
            }
        }
    }

    async function techUpdate(id, data) {
        try {
            const newTechs = Promise.all(techs.map(async tech => {
                if (tech.id === id && tech.status != data.status) {
                    const { token } = JSON.parse(localStorage.getItem('@kenzieHubAuth'))
                    const response = await kenzieHub.put(`/users/techs/${id}`, data, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })

                    toast.success(`${response.data.title} foi atualizado`)
                    setTechCached({})
                    setModal({ open: false, title: undefined })
                    return response.data
                } else {
                    return tech
                }
            }))

            setUser({ ...user, techs: await newTechs })
        } catch (error) {
            toast.error('Ops, algo deu errado! Tente novamente mais tarde', {
                toastId: 2,
            })
        }
    }

    async function techDelete(id, name) {
        try {
            const { token } = JSON.parse(localStorage.getItem('@kenzieHubAuth'))
            await kenzieHub.delete(`/users/techs/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            const newTechs = techs.filter(tech => tech.id !== id)

            toast.success(`${name} foi deletado`)
            setUser({ ...user, techs: newTechs })
            setTechCached({})
            setModal({ open: false, title: undefined })
        } catch (error) {
            toast.error('Ops, algo deu errado! Tente novamente mais tarde', {
                toastId: 2,
            })
        }
    }

    return (
        <TechsContext.Provider value={{ setModal, techCreate, techUpdate, techDelete, techCached, setTechCached }}>
            {children}
            {modal.open && <Modal title={modal.title} />}
        </TechsContext.Provider>
    )
}

export default TechsProvider