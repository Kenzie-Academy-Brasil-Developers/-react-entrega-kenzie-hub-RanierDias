import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import HomePage from './pages/home'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'

import 'react-toastify/dist/ReactToastify.css'
import PageNotFound from './pages/404'

function App() {
  const navigate = useNavigate()

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage navigate={navigate} />} />
        <Route path='/register' element={<RegisterPage navigate={navigate} />} />
        <Route path='/home' element={<HomePage navigate={navigate} />} />
        <Route path='*' element={<PageNotFound navigate={navigate} />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
