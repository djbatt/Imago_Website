import React from "react"
import { Box, Heading, Paragraph } from "grommet"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Container from "../../utils/container"
import Responsive from "../../utils/responsive"

// If the screen is small, medium, or large these are the sizes of the columns
const columns = {
  small: ["auto"],
  medium: ["medium", "auto"],
  large: ["medium", "auto"],
}

// If the screen size is small, medium, or large these are the sizes of the rows
const rows = {
  small: ["auto", "320px"],
  medium: ["auto"],
  large: ["medium"],
}

// Set the different areas you need for every size
const fixedGridAreas = {
  small: [
    { name: "text", start: [0, 0], end: [0, 0] },
    { name: "image", start: [0, 1], end: [0, 1] },
  ],
  medium: [
    { name: "text", start: [1, 0], end: [1, 0] },
    { name: "image", start: [0, 0], end: [0, 0] },
  ],
  large: [
    { name: "text", start: [1, 0], end: [1, 0] },
    { name: "image", start: [0, 0], end: [0, 0] },
  ],
}

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "CurlyGirlCream.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <Container pad="large">
      <Responsive
        columns={columns}
        rows={rows}
        areas={fixedGridAreas}
        gap="large"
      >
        <Box gridArea="image" background="brand">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Curly Girl Products"
          />
        </Box>
        <Box gridArea="text" direction="column" justify="center" fill>
          <Heading level={2} color="text">
            Hair care for Curly Girls
          </Heading>
          <Paragraph color="text" fill>
            Formulated with only the best of ingredients, the Curly Girl system
            gives your locks the love they deserve -- without toxic chemical
            ingredients. Give us a try. Then, you'll understand why we believe
            in our products. We hope you'll believe in Curly Girl, too.
          </Paragraph>
        </Box>
      </Responsive>
    </Container>
  )
}
