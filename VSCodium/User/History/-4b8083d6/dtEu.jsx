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
    element: <Layout> <App /> </Layout>,
  },
  {
    path: "/login",
    element: <Layout> <Login /> </Layout>
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

// Log the initial state
console.log("Initial state: ", store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log("State after dispatch: ", store.getState())
);

// Now, dispatch some actions
store.dispatch(start(["# #", " # ", "# #"]));
console.log(selectTable(store.getState()));

unsubscribe();