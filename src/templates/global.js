import React from "react"
import Header from "../components/header"
import Footer from "../components/footer/footer"

export default ({ children }) => (
  <>
    <Header/>
    <main>{children}</main>
  </>
)
