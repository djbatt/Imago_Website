import React from "react"
import { Box, Heading, Text } from "grommet"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Container from "../../utils/container"
import Responsive from "../../utils/responsive"

// If the screen is small, medium, or large these are the sizes of the columns
const columns = {
  small: ["auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto"],
}

// If the screen size is small, medium, or large these are the sizes of the rows
const rows = {
  small: ["auto", "auto"],
  medium: ["auto"],
  large: ["auto"],
}

// Set the different areas you need for every size
const fixedGridAreas = {
  small: [
    { name: "col-1", start: [0, 0], end: [0, 0] },
    { name: "col-2", start: [0, 1], end: [0, 1] },
  ],
  medium: [
    { name: "col-1", start: [0, 0], end: [0, 0] },
    { name: "col-2", start: [1, 0], end: [1, 0] },
  ],
  large: [
    { name: "col-1", start: [0, 0], end: [0, 0] },
    { name: "col-2", start: [1, 0], end: [1, 0] },
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
        <Box gridArea="col-1" direction="column" fill>
          <Heading level={2} color="text">
            Haircutting
          </Heading>
          <ul
            css={`
              list-style-type: none;
              padding: 0;
            `}
          >
            <li>
              <Box justify="between" direction="row">
                <Text color="text">Curly haircut</Text>
                <Text color="text">$60-80+</Text>
              </Box>
            </li>
            <li>
              <Box justify="between" direction="row">
                <Text color="text">Straight haircut</Text>
                <Text color="text">$60-80+</Text>
              </Box>
            </li>
            <li>
              <Box justify="between" direction="row">
                <Text color="text">Man's haircut</Text>
                <Text color="text">$45-55+</Text>
              </Box>
            </li>
            <li>
              <Box justify="between" direction="row">
                <Text color="text">Children's haircut</Text>
                <Text color="text">$45-55+</Text>
              </Box>
            </li>
            <li>
              <Box justify="between" direction="row">
                <Text color="text">Face frame</Text>
                <Text color="text">$36+</Text>
              </Box>
            </li>
            <li>
              <Box justify="between" direction="row">
                <Text color="text">Bang trim</Text>
                <Text color="text">$17+</Text>
              </Box>
            </li>
            <li>
              <Box justify="between" direction="row">
                <Text color="text">Blowdry</Text>
                <Text color="text">$40+</Text>
              </Box>
            </li>
          </ul>
          <Heading level={2} color="text">
            Color
          </Heading>
          <ul
            css={`
              list-style-type: none;
              padding: 0;
            `}
          >
            <li>
              <Box justify="between" direction="row">
                <Text color="text">Permanent & demi</Text>
                <Text color="text">$90+</Text>
              </Box>
            </li>
            <li>
              <Box justify="between" direction="row">
                <Text color="text">Partial highlight</Text>
                <Text color="text">$90+</Text>
              </Box>
            </li>
            <li>
              <Box justify="between" direction="row">
                <Text color="text">Full highlight</Text>
                <Text color="text">$175+</Text>
              </Box>
            </li>
            <li>
              <Box justify="between" direction="row">
                <Text color="text">Balayage</Text>
                <Text color="text">$115+</Text>
              </Box>
            </li>
            <li>
              <Box justify="between" direction="row">
                <Text color="text">Double process</Text>
                <Text color="text">$120+</Text>
              </Box>
            </li>
            <li>
              <Box direction="column">
                <Box justify="between" direction="row">
                  <Text color="text">Bang trim</Text>
                  <Text color="text">$17+</Text>
                </Box>
                <Text
                  css={`
                    font-style: italic;
                  `}
                  color="text"
                  size="small"
                >
                  consultation required, includes a curly set finish
                </Text>
              </Box>
            </li>
          </ul>
        </Box>
        <Box gridArea="col-2" direction="column" fill>
          <Heading level={2} color="text">
            Keratin
          </Heading>
          <ul
            css={`
              list-style-type: none;
              padding: 0;
            `}
          >
            <li>
              <Box direction="column">
                <Box justify="between" direction="row">
                  <Text color="text">Coppola keratin</Text>
                  <Text color="text">$250+</Text>
                </Box>
                <Text
                  css={`
                    font-style: italic;
                  `}
                  color="text"
                  size="small"
                >
                  Consultation required
                </Text>
              </Box>
            </li>
          </ul>
          <Heading level={2} color="text">
            Waxing
          </Heading>
          <ul
            css={`
              list-style-type: none;
              padding: 0;
            `}
          >
            <li>
              <Box justify="between" direction="row">
                <Text color="text">Facial waxing (per area)</Text>
                <Text color="text">$15+</Text>
              </Box>
            </li>
          </ul>
          <Heading level={2} color="text">
            Occasion Styling
          </Heading>
          <ul
            css={`
              list-style-type: none;
              padding: 0;
            `}
          >
            <li>
              <Box justify="between" direction="row">
                <Text color="text">Blow dry lesson</Text>
                <Text color="text">$65+</Text>
              </Box>
            </li>
            <li>
              <Box justify="between" direction="row">
                <Text color="text">Upstyle</Text>
                <Text color="text">$90+</Text>
              </Box>
            </li>
            <li>
              <Box justify="between" direction="row">
                <Text color="text">Bridal trial</Text>
                <Text color="text">$100+</Text>
              </Box>
            </li>
          </ul>
          <Heading level={2} color="text">
            Add Ons
          </Heading>
          <ul
            css={`
              list-style-type: none;
              padding: 0;
            `}
          >
            <li>
              <Box justify="between" direction="row">
                <Text color="text">Deep conditioning</Text>
                <Text color="text">$25+</Text>
              </Box>
            </li>
            <li>
              <Box direction="column">
                <Box justify="between" direction="row">
                  <Text color="text">Shine treatment</Text>
                  <Text color="text">$30+</Text>
                </Box>
                <Text
                  css={`
                    font-style: italic;
                  `}
                  color="text"
                  size="small"
                >
                  Adds shine & luster to your hair using our magnetic/ionic
                  diamond shine color.
                </Text>
              </Box>
            </li>
          </ul>
        </Box>
      </Responsive>
      <Box
        css={`
          width: fit-content;
          margin: 0 auto;
        `}
        align="start"
      >
        <ul
          css={`
            list-style-type: none;
            padding: 0;
          `}
        >
          <li>
            <Text color="text" size="small">
              No refunds on services, products, or styling tools
            </Text>
          </li>
          <li>
            <Text color="text" size="small">
              Products may only be exchanged within 14 days of purchase
            </Text>
          </li>
          <li>
            <Text color="text" size="small">
              Consultation required for all chemical services
            </Text>
          </li>
          <li>
            <Text color="text" size="small">
              All services are subject to increase depending upon length and
              density of hair
            </Text>
          </li>
          <li>
            <Text color="text" size="small">
              Blowdry prices listed include 30 minutes, each aditional 15
              minutes cost $15-20
            </Text>
          </li>
          <li>
            <Text color="text" size="small">
              Please allow 48 hours notification of cancellation to avoid
              service charge
            </Text>
          </li>
        </ul>
      </Box>
    </Container>
  )
}
