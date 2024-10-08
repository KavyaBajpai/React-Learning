import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>

       <Header />
       <Outlet />
       <Footer />

    </>
  )
}

export default Layout

//This layout has a consistent Header and Footer across the application.
//Outlet acts as a placeholder for any child route that gets rendered. 
//So, if a particular child route matches the current URL, its component will be rendered where the Outlet is placed.