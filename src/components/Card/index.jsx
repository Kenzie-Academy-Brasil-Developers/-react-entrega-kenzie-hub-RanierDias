import { useContext } from 'react'
import { TechsContext } from '../../contexts/techs'
import Li from './style'

function CardTech({ tech }) {
    const { title, status } = tech
    const { setModal, setTechCached } = useContext(TechsContext)

    return (
        <Li onClick={() => {
            setTechCached(tech)
            setModal({open: true, title: 'Tecnologia Detalhes'})
        }}>
            <h3>{title}</h3>
            <p>{status}</p>
        </Li>
    )
}

export default CardTech