import React from "react"
import { Box, Heading, Paragraph } from "grommet"
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
  small: ["auto"],
  medium: ["auto"],
  large: ["auto"],
}

// Set the different areas you need for every size
const fixedGridAreas = {
  small: [{ name: "text", start: [0, 0], end: [0, 0] }],
  medium: [{ name: "text", start: [0, 0], end: [0, 0] }],
  large: [{ name: "text", start: [0, 0], end: [0, 0] }],
}

export default () => {
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
            Are you a candidate for a Curly Girl® haircut?
          </Heading>
          <Paragraph color="text" fill>
            The curly girl® method of cutting requires we see the hair in it’s
            natural form as we will cut your hair dry first, then cleanse and
            show you how to apply and choose the right products and application
            methods and tools, to minimize frizz and optimize your curls. Then
            we will place you under a specialized dryer designed to mimic
            natural drying.
          </Paragraph>
          <Paragraph color="text" fill>
            Curly cuts take on average, 1 1/2 hours . We have complimentary
            wireless, so feel free to bring your laptop while your hair is
            drying.
          </Paragraph>
          <Paragraph color="text" fill>
            To prepare for a Curly haircut on the day of the haircut:
          </Paragraph>
          <ol>
            <li>Hair must be worn down and Curly, and Completely Dry.</li>
            <li>
              No brushing, no hair ties, scrunchies, barrettes, clips,
              headbands, etc.
            </li>
          </ol>
        </Box>
      </Responsive>
    </Container>
  )
}
