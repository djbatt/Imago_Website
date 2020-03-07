import React from "react"
import { Box, Heading, Paragraph, Text } from "grommet"
import { Schedule } from "grommet-icons"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Container from "../../utils/container"
import Responsive from "../../utils/responsive"

// If the screen is small, medium, or large these are the sizes of the columns
const columns = {
  small: ["auto"],
  medium: ["auto"],
  large: ["auto"],
}

// If the screen size is small, medium, or large these are the sizes of the rows
const rows = {
  small: ["500px"],
  medium: ["500px"],
  large: ["600px"],
}

// Set the different areas you need for every size
const fixedGridAreas = {
  small: [{ name: "hero", start: [0, 0], end: [0, 0] }],
  medium: [{ name: "hero", start: [0, 0], end: [0, 0] }],
  large: [{ name: "hero", start: [0, 0], end: [0, 0] }],
}

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "indexHero.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <Box background="accent-1" direction="column">
      <Responsive
        columns={columns}
        rows={rows}
        areas={fixedGridAreas}
        css={`
          position: relative;
        `}
      >
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="Curly Hair Salon"
          css={`
            opacity: 0.2;
          `}
        />
        <Box
          gridArea="hero"
          direction="column"
          justify="center"
          fill
          css={`
            position: absolute;
          `}
        >
          <Container>
            <Box pad="large">
              <Heading level={1} color="text">
                Our Stylists
              </Heading>
              <Box width="large">
                <Paragraph color="text" size="large" fill>
                  Our expert hair care stylists can give you the look you've always
                  wanted. Keeping your hair both beautiful and healthy can
                  present a real challenge. Learn more about the essential tips
                  and tricks of long-term hair care health from our stylists.
                </Paragraph>
              </Box>
            </Box>
          </Container>
        </Box>
      </Responsive>
    </Box>
  )
}
