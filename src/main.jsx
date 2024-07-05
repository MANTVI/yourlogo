import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import { RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{gitHubInfo} from './components/Github/Github.jsx'
 

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {path:"",
       element:<Home/>
      },
      {path:"About",
       element:<About/>
      },
      {
        path:"Contact",
        element:<Contact/>
      },
      {
        path:"User/:userid",
        element:<User/>
      },
      {
        
        path:"/Github",
        element:<Github/>,
        loader:gitHubInfo
      }

    ]

  }
])

// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <router path="/" elements={<Layout/>}>
//       <router path="" element={<Home/>}/>
//       <router path="About" element={<About/>}/>
//       <router path="Contact" element={<Contact/>}/>

//     </router>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
