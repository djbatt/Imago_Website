import React from "react"
import Layout from "../templates/global"
import SEO from "../utils/seo"
import Hero from "../components/stylists/hero"
import Content from '../components/stylists/content'
import Content1 from '../components/stylists/content-1'
import Content2 from '../components/stylists/content-2'

export default () => {
  return (
    <Layout>
      <SEO
        description="Meta Description"
        title="Page Title | Salon Richmond, VA"
      />
      <Hero />
      <Content />
      <Content1 />
      <Content2 />
    </Layout>
  )
}
