import React from 'react'
import Navbar from "../Navbar/index"
import Footer from '../footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout