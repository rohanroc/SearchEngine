import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import Routess from './componets/Routess.jsx'
import { RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Routess />
      },
      {
        path: "search",
        element: <Routess />
      },
      {
        path: "images",
        element: <Routess />
      },
      {
        path: "news",
        element: <Routess />
      },
      {
        path: "videos",
        element: <Routess />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
