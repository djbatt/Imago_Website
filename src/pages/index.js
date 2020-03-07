import React from "react"
import Layout from "../templates/global"
import SEO from "../utils/seo"
import Hero from "../components/index/hero"
import Content from "../components/index/content"
import Content1 from "../components/index/content-1"
import Content2 from "../components/index/content-2"

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
