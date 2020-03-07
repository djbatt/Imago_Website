/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
const { theme, globalStyle } = require("./src/utils/theme")
const { createGlobalStyle } = require("styled-components")
const { Grommet } = require("grommet")

exports.wrapPageElement = ({ element }) => {
  const GlobalStyles = createGlobalStyle`${globalStyle}`
  return (
    <Grommet theme={theme}>
      <GlobalStyles />
      {element}
    </Grommet>
  )
}
