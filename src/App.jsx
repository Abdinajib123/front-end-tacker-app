import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Loginpage from './pages/loginpage.jsx'
import { Signuppage } from './pages/signuppage.jsx'
import Dashboard from './pages/dashboard/dashboard.jsx'


function App() {
  return (
    <div className="App">
      {/* <Loginpage /> */}
      <Dashboard />

      <Outlet />
    </div>
  )
}

export default App
