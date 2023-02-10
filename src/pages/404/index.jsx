import ButtonSmall from '../../components/Button/Small/style';
import Main from './style';

function PageNotFound({ navigate }) {
    function login() {
        navigate('/')
    }

    return (
        <Main>
            <h1>A página pesquisada não existe :´(</h1>
            <p>Error 404: A página não existe ou foi realocada para outro endereço!</p>
            <ButtonSmall onClick={login}>Login</ButtonSmall>
        </Main>
    )
}

export default PageNotFound