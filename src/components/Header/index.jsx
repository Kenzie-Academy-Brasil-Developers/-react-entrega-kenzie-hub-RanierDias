import { toast } from 'react-toastify';
import ButtonSmall from '../Button/Small/style';
import HeardeStyled from './style';

function Header({ navigate, user }) {
    function logOut() {
        toast(`Esperemos que volte logo ${user.name}`)
        localStorage.clear()
        navigate('/')
    }

    return (
        <HeardeStyled>
            <h1>Kenzie Hub</h1>
            <ButtonSmall onClick={logOut}>Sair</ButtonSmall>
        </HeardeStyled>
    )
}

export default Header