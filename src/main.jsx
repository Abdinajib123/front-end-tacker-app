import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
// import { BrowserRouter, createBrowserRouter } from 'react-router-dom'


// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <App />,
//       Children: [
//         {
//           path: '/login',
//           element: <Loginpage />,
//         },
//         {
//           path: '/register',
//           element: <Signuppage />
//         },
//         {
//           path: '/dashboard',
//           element: <Dashboard />
//         }

//       ]
//     },

//   ]
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
