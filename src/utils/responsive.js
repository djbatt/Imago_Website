import React from "react"
import { ResponsiveContext, Grid } from "grommet"

export default ({ children, areas, ...props }) => (
  <ResponsiveContext.Consumer>
    {size => {
      // Take into consideration if not array is sent but a simple string
      let columnsVal = props.columns
      if (props.columns) {
        if (props.columns[size]) {
          columnsVal = props.columns[size]
        }
      }

      let rowsVal = props.rows
      if (props.rows) {
        if (props.rows[size]) {
          rowsVal = props.rows[size]
        }
      }

      // Also if areas is a simple array not an object of arrays for
      // different sizes
      let areasVal = areas
      if (areas && !Array.isArray(areas)) areasVal = areas[size]

      return (
        <Grid
          {...props}
          areas={!areasVal ? undefined : areasVal}
          rows={!rowsVal ? size : rowsVal}
          columns={!columnsVal ? size : columnsVal}
        >
          {children}
        </Grid>
      )
    }}
  </ResponsiveContext.Consumer>
)
