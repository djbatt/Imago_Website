import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


export default () => {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "imago.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <Link
      css={'width: 140px;'}
      to="/"
    >
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Imago Logo"
      />
    </Link>
  )
}
