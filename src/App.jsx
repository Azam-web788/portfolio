import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import "./index.css"
import Services from './pages/Services.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element : <Home/>
  },
  {
    path: '/about',
    element : <About/>
  },
  {
    path: '/contact',
    element : <Contact/>
  },
  {
    path: '/projects',
    element : <Projects/>
  },
  {
    path: '/services',
    element : <Services/>
  },
])
export default function App() {
    return (
        <RouterProvider router={router} />
    )
}
