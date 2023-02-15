import { useContext } from 'react'
import { UserContext } from '../../contexts/user'
import { TechsContext } from '../../contexts/techs'

import Header from '../../components/Header'
import Main from './style'
import { MdOutlineAdd } from 'react-icons/md'
import Loading from '../../components/Loading/style'
import CardTech from '../../components/Card'

function HomePage() {
    const { user, user: { name, module, techs }, navigate } = useContext(UserContext)
    const { setModal } = useContext(TechsContext)

    return (
        <>
            {techs ?
                <>
                    <Header navigate={navigate} user={user} />
                    <Main className="main-container">
                        <div>
                            <h1>Olá, {name}!</h1>
                            <h4>{module}</h4>
                        </div>

                        <section>
                            <div>
                                <h2>Tecnologias</h2>
                                <button onClick={() => setModal({open: true, title: 'Cadastrar Tecnologia'})}><MdOutlineAdd /></button>
                            </div>

                            <ul>
                                {techs.length > 0 ?
                                    techs.map(tech =>
                                        <CardTech key={tech.id} tech={tech} />
                                    )
                                    :
                                    <p>Sem tecnologia</p>
                                }
                            </ul>
                        </section>
                    </Main>
                </>
                :
                <Loading>
                    <div></div>
                    <h2>Carregando</h2>
                </Loading>
            }
        </>
    )
}

export default HomePage