import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="Levan K." />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
