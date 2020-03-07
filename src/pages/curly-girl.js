import React from "react"
import Layout from "../templates/global"
import SEO from "../utils/seo"
import Hero from "../components/curly-girl/hero"
import Content from "../components/curly-girl/content"
import Content1 from "../components/curly-girl/content-1"

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
    </Layout>
  )
}
