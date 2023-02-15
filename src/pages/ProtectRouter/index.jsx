import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../contexts/user';

function ProtectRouter() {
    const { user, navigate } = useContext(UserContext)

    return (
        <>
            {user ? <Outlet /> : navigate('/')}
        </>
    )
}

export default ProtectRouter