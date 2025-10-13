import { Fragment, useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Loginpage from './pages/loginpage.jsx'
import { Signuppage } from './pages/signuppage.jsx'
import Dashboard from './pages/dashboard/dashboard.jsx'


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loginpage />} />
          <Route path='/register' element={<Signuppage />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        <Outlet />
      </BrowserRouter>
    </Fragment>
    
  )
}

export default App
