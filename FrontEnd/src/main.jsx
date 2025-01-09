import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import "./styles.css"
import App from './App.jsx';
import Plan from "./Components/Plan";
import Register from "./Components/Register";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/plan",
      element: <Plan />
    },
    {
      path: "/register",
      element: <Register />
    }
  ]
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>
)
