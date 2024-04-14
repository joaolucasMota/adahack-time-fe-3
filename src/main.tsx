import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import ReactDOM from 'react-dom/client'

import React from 'react'
import { GlobalStyles } from './styles/global'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles /> {/* Estilos globais */}
    <RouterProvider router={router} /> {/* Provedor do roteador */}
  </React.StrictMode>,
)