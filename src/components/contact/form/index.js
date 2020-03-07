import React from "react"
import Form1 from "./form-1"
import Form2 from "./form-2"
import ThankYou from './Thankyou'
import { Box, Paragraph, Heading } from "grommet"

const box = `
box-shadow:
  0 2.6px 2.7px -37px rgba(0, 0, 0, 0.022),
  0 6.6px 6.9px -37px rgba(0, 0, 0, 0.031),
  0 13.5px 14.2px -37px rgba(0, 0, 0, 0.039),
  0 27.7px 29.2px -37px rgba(0, 0, 0, 0.048),
  0 76px 80px -37px rgba(0, 0, 0, 0.07)
;
border-radius: 24px;
`

export default () => {
  const initialState = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    survey: "",
    businessName: "",
    goals: "",
    products: "",
    customer: "",
    concerns: "",
    formIndex: 0,
    formStatus: 0,
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "firstName":
        return { ...state, firstName: action.payload }
      case "lastName":
        return { ...state, lastName: action.payload }
      case "emailAddress":
        return { ...state, emailAddress: action.payload }
      case "survey":
        return { ...state, survey: action.payload }
      case "businessName":
        return { ...state, businessName: action.payload }
      case "goals":
        return { ...state, goals: action.payload }
      case "products":
        return { ...state, products: action.payload }
      case "customer":
        return { ...state, customer: action.payload }
      case "concerns":
        return { ...state, concerns: action.payload }
      case "formIndex":
        return { ...state, formIndex: action.payload }
      default:
        throw new Error()
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState)

  const onChange = e => {
    dispatch({
      type: e.target.id,
      payload: e.target.value,
    })
  }

  const increment = () => {
    let index = state.formIndex
    ++index
    dispatch({
      type: "formIndex",
      payload: index,
    })
  }

  const decrement = () => {
    let index = state.formIndex
    --index
    dispatch({
      type: "formIndex",
      payload: index,
    })
  }

  const sendEmail = () => {
    let url = "https://ejuvedvkbb.execute-api.us-east-1.amazonaws.com/test"
    let formData = state

    fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then(response => {
        increment()
        console.log(response)
      })
      .catch(err => {
        increment()
        console.log(err)
      })
  }

  return (
    <Box
      background="light-1"
      pad="large"
      css={box}
      border={{
        color: "border",
        size: "1px",
        style: "solid",
        side: "all",
      }}
    >
    <Heading level={2} size='xlarge' align="start">
      Contact form
    </Heading>
    <Box width="large">
      <Paragraph size="large" fill color="text">
        What is your current project? Source is currently looking to take on
        new clients and make the internet faster, one website at a time. Fill
        out the form below and Source will be in touch with you to better
        understand your needs.
      </Paragraph>
    </Box>
      {state.formIndex === 0 && (
        <Form1 changeFunc={onChange} state={state} next={increment} />
      )}

      {state.formIndex === 1 && (
        <Form2
          changeFunc={onChange}
          state={state}
          back={decrement}
          submit={sendEmail}
        />
      )}

      {state.formIndex === 2 && (
        <ThankYou
          name={state.firstName}
        />
      )}
    </Box>
  )
}
