import React from "react"
import { Box, Form, FormField, TextInput, Text, Button } from "grommet"
import { FormNextLink } from "grommet-icons"

export default props => {
  return (
    <>
      <Form>
        <FormField
          label={<Text size="large">First Name</Text>}
          required
          htmlFor="firstName"
        >
          <TextInput
            id="firstName"
            placeholder="Your first name"
            onChange={props.changeFunc}
            value={props.state.firstName}
            focusIndicator={true}
          />
        </FormField>
        <FormField
          label={<Text size="large">Last Name</Text>}
          required
          htmlFor="lastName"
        >
          <TextInput
            id="lastName"
            placeholder="Your first name"
            onChange={props.changeFunc}
            value={props.state.lastName}
            focusIndicator={true}
          />
        </FormField>
        <FormField
          label={<Text size="large">Email Address</Text>}
          required
          htmlFor="emailAddress"
        >
          <TextInput
            id="emailAddress"
            placeholder="email@company.com"
            onChange={props.changeFunc}
            value={props.state.emailAddress}
            focusIndicator={true}
          />
        </FormField>
        <FormField
          label={<Text size="large">How did you find Source?</Text>}
          required
          htmlFor="survey"
        >
          <TextInput
            id="survey"
            placeholder="Google, social media, etc"
            onChange={props.changeFunc}
            value={props.state.survey}
            focusIndicator={true}
          />
        </FormField>
        <Box direction="row" justify="end" margin={{ top: "medium" }}>
          <Button
            icon={<FormNextLink />}
            size="medium"
            reverse
            label="Next"
            onClick={props.next}
          />
        </Box>
      </Form>
    </>
  )
}
