import React from "react"
import styled from "styled-components"
import { Menu, Close } from "grommet-icons"

const ClickMe = styled.button`
  height: fit-content;
  margin: auto 0;
  padding: 0px 4px;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  :hover {
    cursor: pointer;
  }
`

export default props => (
  <>
    {!props.passedState.visible && (
      <ClickMe
        onClick={props.open}
      >
        <Menu size="large" />
      </ClickMe>
    )}
    {props.passedState.visible && (
      <ClickMe
        onClick={props.close}
      >
        <Close size="large" />
      </ClickMe>
    )}
  </>
)
