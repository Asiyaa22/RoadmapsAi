// import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import "./styles.css"
import App from './App.jsx';
import Register from "./Components/Register";
// import Plan from "./Components/Plan";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/register",
      element: <Register />
    }
  ]
);


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <React.Fragment>
    <RouterProvider router={router} />
  </React.Fragment>
  // </StrictMode>
)
