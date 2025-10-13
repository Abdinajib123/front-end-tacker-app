import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Loginpage from './pages/loginpage'
import { Signuppage } from './pages/signuppage'
import Dashboard from './pages/dashboard/dashboard'

const router =createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
       Children:[
      {
        path:'/login',
        element:<Loginpage/>,
      },
      { 
        path:'/register',
        element:<Signuppage/>
      },
       { 
        path:'/dashboard',
        element:<Dashboard/>
      }

    ]
    },
    
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
