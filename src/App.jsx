import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Loginpage from './pages/loginpage.jsx'


function App() {
return (
  <div className="App">
    <Loginpage />
   <Outlet />
  </div>
)
}

export default App
