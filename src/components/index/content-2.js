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
      file(relativePath: { eq: "StraightHairCut.jpeg" }) {
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
            A style for everyone
          </Heading>
          <Paragraph color="text" fill>
            While our “claim to fame” is curls, we cater to all hair types and
            textures. We strive to create a unique style for every client, while
            offering exceptional customer service. Our stylists use their
            extensive training to give you the best look and newest techniques
            available.
          </Paragraph>
        </Box>
        <Box gridArea="image" background="brand">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Happy client after hair cut"
          />
        </Box>
      </Responsive>
    </Container>
  )
}
