import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/scss/base/_globales.scss'
import { router } from './route'
import { RouterProvider } from 'react-router-dom'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

          <RouterProvider router={router} />

  </React.StrictMode>,
)
