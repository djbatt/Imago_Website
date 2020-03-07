import React from "react"
import { Paragraph, Heading } from "grommet"

export default props => {
  return (
      <>
      <Heading
        level={2}
        align="center"
        color="text"
        css={`
          margin: auto 0;
        `}
      >Thank you {props.name}.
      </Heading>
        <Paragraph>
          We'll be in touch with you within twenty four hours.
        </Paragraph>
      </>
  )
}
