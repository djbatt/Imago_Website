import React from "react"
import { Accordion, AccordionPanel, Nav } from "grommet"
import { Link } from "gatsby"

export default props => {
  return (
    <Accordion animate={true} activeIndex={props.passedState.index}>
      <AccordionPanel header={<></>}>
        <Nav direction="column" gap="large" overflow="auto">
          {props.passedPages.map(page => (
            <Link
              to={page.path}
              key={page.label}
              css={`
                text-decoration: none;
              `}
            >
              {page.label}
            </Link>
          ))}
        </Nav>
      </AccordionPanel>
    </Accordion>
  )
}
