import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Loginpage from './pages/auth/loginpage.jsx'
import './index.css'

const router= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"auth/login",
        element:<Loginpage/>
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
