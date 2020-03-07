import React from "react"
import { Box, Form, FormField, TextInput, Text, Button } from "grommet"
import { Send, FormPreviousLink } from "grommet-icons"

export default props => {
  return (
    <>
      <Form>
        <FormField
          label={<Text size="large">What's your business name?</Text>}
          required
          htmlFor="businessName"
        >
          <TextInput
            id="businessName"
            placeholder="Bob's Cafe, Big Business Inc"
            onChange={props.changeFunc}
            value={props.state.businessName}
            focusIndicator={true}
          />
        </FormField>
        <FormField
          label={
            <Text size="large">What are your long and short term goals?</Text>
          }
          required
          htmlFor="goals"
        >
          <TextInput
            id="goals"
            placeholder="Increase ROI, bring in more clicks, etc"
            onChange={props.changeFunc}
            value={props.state.goals}
            focusIndicator={true}
          />
        </FormField>
        <FormField
          label={
            <Text size="large">What products or services do you offer?</Text>
          }
          required
          htmlFor="products"
        >
          <TextInput
            id="products"
            placeholder="Tacos, hair cuts, etc"
            onChange={props.changeFunc}
            value={props.state.products}
            focusIndicator={true}
          />
        </FormField>
        <FormField
          label={
            <Text size="large">Who is your ideal customer or client?</Text>
          }
          required
          htmlFor="customer"
        >
          <TextInput
            id="customer"
            placeholder="Hungry people, upper class folk"
            onChange={props.changeFunc}
            value={props.state.customer}
            focusIndicator={true}
          />
        </FormField>
        <Box direction="row" justify="between" margin={{ top: "medium" }}>
          <Button
            icon={<FormPreviousLink />}
            size="medium"
            label="Back"
            onClick={props.back}
          />
          <Button
            icon={<Send />}
            size="medium"
            primary
            reverse
            label="Submit"
            onClick={props.submit}
          />
        </Box>
      </Form>
    </>
  )
}
