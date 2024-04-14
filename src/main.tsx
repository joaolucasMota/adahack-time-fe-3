import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import ReactDOM from 'react-dom/client'
import React from 'react'
import { GlobalStyles } from './styles/global'
import { Header } from './components/Header'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>,
)