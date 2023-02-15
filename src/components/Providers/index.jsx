import UserProvider from '../../contexts/user';

function Providers({ children }) {
    return (
        <UserProvider>
            {children}
        </UserProvider>
    )
}

export default Providers