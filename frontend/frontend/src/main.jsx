import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Root from './Root.jsx';
import SignupForm from './SignupForm.jsx';


const router = createBrowserRouter([
  { path:'/',
    element:<Root/>,
    children:[
      {
        path:'/',
        element:<App/>
      },

      {
        path:'/signup',
        element:<SignupForm/>
      }


    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
