import { useContext } from 'react';
import { TechsContext } from '../../contexts/techs';
import FormTech from '../Form/FormTech';
import Div from './style';

function Modal({ title }) {
    const { setModal, setTechCached } = useContext(TechsContext)
    const formUpdate = title === 'Tecnologia Detalhes'

    return (
        <Div role="dialog">
            <div>
                <div>
                    <h3>{title}</h3>
                    <button onClick={() => {
                        setModal({ open: false, title: undefined })
                        setTechCached({})
                    }}>X</button>
                </div>

                <FormTech upDateType={formUpdate}/>
            </div>
        </Div>
    )
}

export default Modal