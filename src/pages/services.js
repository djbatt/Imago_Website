import React from "react"
import Layout from "../templates/global"
import SEO from "../utils/seo"
import Hero from "../components/services/hero"
import Menu from '../components/services/menu'

export default () => {
  return (
    <Layout>
      <SEO
        description="Meta Description"
        title="Page Title | Salon Richmond, VA"
      />
      <Hero />
      <Menu />
    </Layout>
  )
}
