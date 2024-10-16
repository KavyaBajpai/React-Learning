import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from './layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'

//1st method to create routes
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//          path: '/',
//          element: <Home />
//       },
//       {
//         path: '/About',
//         element: <About />
//       },
//       {
//         path: '/Contact',
//         element: <Contact />
//       }

//     ]
//   }
// ])

//2nd method to create routes
const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userid' element={<User />}/>
      <Route path='github' element={<Github />}/>
    </Route>
   )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

//createBrowserRouter is a function from the React Router library 
//(specifically from react-router-dom), used to define your application's 
//route structure. It creates a browser-based router that leverages the HTML5 
//history API (i.e., pushState, replaceState, and popstate events) to manage 
//navigation within your app without reloading the page.

//Key Roles of createBrowserRouter:
//Define Routes: It allows you to specify which components should render based on the URL path. You can define parent-child relationships for nested routing.

//History Management: It uses the browser’s history API, allowing the user to navigate through pages (with back/forward buttons) without triggering full page reloads.

//Dynamic Navigation: It enables navigation between different components based on the route path, handling route changes and URL updates seamlessly.

//How It Works:
//createBrowserRouter creates a router object containing the paths (/, /about, etc.) and their corresponding components.
//It then allows React Router to listen for changes to the URL and update the UI accordingly without refreshing the page.
