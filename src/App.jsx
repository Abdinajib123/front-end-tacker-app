import { Fragment } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Loginpage from './pages/loginpage.jsx'
import { Signuppage } from './pages/signuppage.jsx'
import Dashboard from './pages/dashboard/dashboard.jsx'
import Projects from './pages/dashboard/projects.jsx'
import Tasks from './pages/dashboard/tasks.jsx'
import { User } from 'lucide-react'
import Layout from './components/layout.jsx'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/register" element={<Signuppage />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="users" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App