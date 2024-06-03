import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
} from 'react-router-dom'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import Login from './views/auth/LoginPage.jsx'
import Register from './views/auth/RegisterPage.jsx'
import Layout from './components/Layout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Layout> <Register /> </Layout>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}> 
        </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
