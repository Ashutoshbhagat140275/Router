import React from 'react'
import Header from './components/Header/Header'
import Footter from './components/Footter/Footter'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
      <>
          <Header />
          <Outlet />
          <Footter/>
      </>
  )
}

export default Layout
