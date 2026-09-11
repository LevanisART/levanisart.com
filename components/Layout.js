import React from "react"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="Levan K." />
      <main className="main">{children}</main>
    </>
  )
}

export default Layout
