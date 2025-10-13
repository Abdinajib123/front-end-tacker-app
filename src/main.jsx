import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Loginpage from './pages/loginpage'

const router =createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>,
       Children:[
      {
        path:'/login',
        element:<Loginpage/>
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
