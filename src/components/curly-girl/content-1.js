import React from "react"
import { Box, Heading, Paragraph, Text } from "grommet"
import { Share } from "grommet-icons"
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
      file(relativePath: { eq: "CurlyGirlProducts.jpg" }) {
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
            Specialized products for Curly Girls
          </Heading>
          <Paragraph color="text" fill>
            If you’ve been dreaming of a brand that understands curly hair….
            Welcome to Curly Girl. We pride ourselves on delivering products
            that are non-toxic, affordable and as unique as your hair itself.
          </Paragraph>

          <a
            href="https://curlyproducts.com"
            rel="noopener noreferrer"
            css={`
              text-decoration: none;
              color: #f8f8f8;
            `}
          >
            <Box
              direction="row"
              gap="small"
              border={{
                color: "accent-1",
                size: "medium",
                style: "solid",
                side: "all",
              }}
              width="fit-content"
              pad="small"
              background="accent-1"
            >
              <Share />
              <Text>Shop Curly Girl®</Text>
            </Box>
          </a>
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
