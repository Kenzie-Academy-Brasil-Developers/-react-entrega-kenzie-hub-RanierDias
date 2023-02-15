import { Route, Routes } from 'react-router-dom'

import HomePage from '../pages/home'
import LoginPage from '../pages/login'
import RegisterPage from '../pages/register'
import PageNotFound from '../pages/404'
import ProtectRouter from '../pages/ProtectRouter'
import TechsProvider from '../contexts/techs'

function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/home' element={<ProtectRouter />} >
                <Route path=':name' element={<TechsProvider> <HomePage /> </TechsProvider>} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default RoutesApp