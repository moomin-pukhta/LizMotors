import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import MR from './components/MR/MR.jsx'
import Planning from './components/Planning/Planning.jsx'
import Manufacturing from './components/Manufacturing/Manufacturing.jsx'
import Sales from './components/Sales/Sales.jsx'
import Design from './components/Design/Design.jsx' 
import About from './components/About/About.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='Market-Research' element={<MR />} />
      <Route path='Planning' element={<Planning />} />
      <Route path='Design' element={<Design />} />
      <Route path='Manufacturing' element={<Manufacturing />} />
      <Route path='Sales' element={<Sales />} />
      <Route path='About' element={<About />} />

      
     
      
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
