import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/route'
import { RouterProvider } from 'react-router'
 import { ToastContainer, toast } from 'react-toastify';
import ContextProvider from './contexts/ContextProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    <ToastContainer />
    </ContextProvider>
  </StrictMode>,
)
