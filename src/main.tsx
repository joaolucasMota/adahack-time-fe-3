import GlobalStyle from './styles/global'
import ReactDOM from 'react-dom/client'
import React from 'react'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)