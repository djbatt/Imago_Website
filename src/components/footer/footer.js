import React from "react"
import { Link } from "gatsby"
import { defaultProps, Footer, Box, Text, Button } from "grommet"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { Twitter, Facebook, Instagram } from "grommet-icons"

export default () => {
  return (
    <Footer pad="large" direction="column">
      <Box direction='row'>
        <OutboundLink
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/SourceRva"
        >
          <Button icon={<Twitter />} size="large" />
        </OutboundLink>
        <OutboundLink
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/source.rva/"
        >
          <Button icon={<Instagram />} size="large" />
        </OutboundLink>
        <OutboundLink
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com/sourcerva"
        >
          <Button icon={<Facebook />} size="large" />
        </OutboundLink>
      </Box>
      <Box justify="center">
        <Text size="xsmall">
          © {new Date().getFullYear()} SourceRVA LLC. All rights reserved.
        </Text>
        <Text size="xsmall">
          Made with ♥ by{" "}
          <Link
            to="/"
            css={`
              text-decoration: none;
              color: ${defaultProps.theme.global.colors.dark};
              :active {
                color: ${defaultProps.theme.global.colors.dark};
              }
            `}
          >
            Source
          </Link>
          .
        </Text>
      </Box>
    </Footer>
  )
}
