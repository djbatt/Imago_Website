import React, { useState } from "react"
import { Link } from "gatsby"
import { Header, Box, Nav, defaultProps } from "grommet"
import { Schedule, Phone, Gift } from "grommet-icons"
import styled from "styled-components"
import Logo from "../logo"
import Container from "../../utils/container"
import MobileButtons from "./mobileButtons"
import Accordion from './accordion'
import Pages from "../pages"

const NavbarLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: #2e2e2e;
`

const HideWhenSmall = `
  display: none;
  @media (min-width: ${defaultProps.theme.global.breakpoints.small.value}px) {
    display: flex;
  }
`

const HideWhenBigger = `
  display: flex;
  @media (min-width: ${defaultProps.theme.global.breakpoints.small.value}px) {
    display: none;
  }
`

export default () => {
  //Accordion activeIndex is set to 1 because the first panel is 0 in the array. We change it to 0 when we want to show it!
  const [state, setState] = useState({ visible: false, index: 1, tabIndex: 0 })

  const Open = () => {
    setState({ visible: true, index: 0 })
    document.body.style.overflow = "hidden"
  }

  const Close = () => {
    setState({ visible: false, index: 1 })
    document.body.style.overflow = "unset"
  }

  return (
    <Header
      css={`
        position: fixed;
        top: 0;
        width: 100%;
        padding: 12px;
        z-index: 25;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
      `}
      background="light-1"
    >
      <Container direction="column">
        <Box direction="row" justify="between" fill>
          <Logo />
          <Box direction="column" justify="evenly" css={HideWhenSmall}>
            <Box
              direction="row"
              gap="medium"
              pad={{ horizontal: "12px" }}
              justify="end"
            >
              <a
                href="tel:+18043551040"
                css={`
                  text-decoration: none;
                  text-transform: uppercase;
                  color: #2e2e2e;
                `}
              >
                <Box direction="row" gap="small">
                  <Phone />
                  (804) 355-1040
                </Box>
              </a>
              <NavbarLink to="/book-online">
                <Box direction="row" gap="small">
                  <Schedule />
                  Request an appointment
                </Box>
              </NavbarLink>
              <NavbarLink to="/book-online">
                <Box direction="row" gap="small">
                  <Gift />
                  Gift cards
                </Box>
              </NavbarLink>
            </Box>
            <Nav direction="row" gap="medium" pad={{ horizontal: "12px" }}>
              {Pages.map(page => (
                <NavbarLink to={page.path} key={page.label}>
                  {page.label}
                </NavbarLink>
              ))}
            </Nav>
          </Box>
          <Box css={HideWhenBigger}>
            <MobileButtons
              passedState={state}
              passedSetState={setState}
              open={Open}
              close={Close}
            />
          </Box>
        </Box>
        <Accordion passedState={state} passedPages={Pages}/>
      </Container>
    </Header>
  )
}
