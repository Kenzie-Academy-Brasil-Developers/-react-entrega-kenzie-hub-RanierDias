import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Main from './style'

function HomePage({ navigate }) {
    const [user, setUser] = useState({})

    useEffect(() => {
        const userCur = JSON.parse(localStorage.getItem('@kenzieHubAuth'))

        setUser(userCur)
    }, [])

    return (
        <>
            <Header navigate={navigate} user={user} />
            <Main className="main-container">
                <div>
                    <h1>Olá, {user.name}!</h1>
                    <h4>{user.module}</h4>
                </div>

                <section>
                    <h2>Que pena! Estamos em desenvolvimento :(</h2>
                    <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
                </section>
            </Main>
        </>
    )
}

export default HomePage