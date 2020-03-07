import React from "react"
import { Box } from "grommet"

export default ({ children, direction, pad }) => (
  <Box
    css={`
      max-width: 1300px;
      margin: 0 auto;
    `}
    fill='horizontal'
    direction={direction}
    pad={pad}
  >
    {children}
  </Box>
)
