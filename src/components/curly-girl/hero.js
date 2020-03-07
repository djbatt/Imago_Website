import React from "react"
import { Box, Heading, Paragraph } from "grommet"
import { graphql, useStaticQuery } from "gatsby"
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
      file(relativePath: { eq: "CurlyGirlCut.jpeg" }) {
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
              Curly Girl®
              </Heading>
              <Box width="large">
                <Paragraph color="text" size="large" fill>
                Are you a curly girl? (Wavy counts too!) Do you want to be able to smooth your hair out and flat iron on a regular basis? If so, ask for a straight hair haircut as Curly Girl® cuts are designed to optimize the look of curly hair when worn that way.
                </Paragraph>
              </Box>
            </Box>
          </Container>
        </Box>
      </Responsive>
    </Box>
  )
}
