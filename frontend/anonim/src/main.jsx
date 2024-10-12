import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createRoutesFromElements} from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Register from './components/Register.jsx'
import { Provider}  from 'react-redux'
import store from './redux/store.js'

const router  = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element = {<App />}>
          <Route path = "/register" element = {<Register />} />
      </Route>
    )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />

    </Provider>
  </StrictMode>,
)
