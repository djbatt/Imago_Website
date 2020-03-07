import React from "react"
import { Box, Heading, Paragraph } from "grommet"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Container from "../../utils/container"
import Responsive from "../../utils/responsive"

// If the screen is small, medium, or large these are the sizes of the columns
const columns = {
  small: ["auto"],
  medium: ["auto", "medium"],
  large: ["auto", "medium"],
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
    { name: "text", start: [0, 0], end: [0, 0] },
    { name: "image", start: [1, 0], end: [1, 0] },
  ],
  large: [
    { name: "text", start: [0, 0], end: [0, 0] },
    { name: "image", start: [1, 0], end: [1, 0] },
  ],
}

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "CurlyHair.jpg" }) {
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
        <Box gridArea="text" direction="column" justify="center" fill>
          <Heading level={2} color="text">
            Who we are
          </Heading>
          <Paragraph color="text" fill>
            We opened our doors in September of 1999 with the goal of delivering
            high quality, chic haircuts and color as well as the highest quality
            products. Located in the heart of the Fan in Richmond, our salon
            space offers a local, cozy atmosphere. Our tightly-knit crew is
            filled with continuous knowledge and passion for the industry.
          </Paragraph>
        </Box>
        <Box gridArea="image" background="brand">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Curly Girl Products"
          />
        </Box>
      </Responsive>
    </Container>
  )
}
