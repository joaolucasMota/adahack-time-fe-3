import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)