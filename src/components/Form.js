import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  textField: {
    display: 'flex',
    margin: theme.spacing.unit,
    width: '50%'
  },
  button: {
    width: "100%",
    margin: theme.spacing.unit
  }
})

const Form = (props) => (
  <form onSubmit={props.getYelp}>
    <TextField
      className={props.classes.textField}
      label='Search term:'
      margin='normal'
      name='term'
      type='search'
      variant='outlined'
      InputLabelProps={{
        required: true,
        color: 'white',
        shrink: true
      }}
    />
    <TextField
      className={props.classes.textField}
      label='Categories'
      margin='normal'
      name='categories'
      type='search'
      variant='outlined'
      InputLabelProps={{
        required: true,
        color: 'white',
        shrink: true
      }}
    />
    <TextField
      className={props.classes.textField}
      label='City/Location'
      margin='normal'
      name='location'
      type='search'
      variant='outlined'
      InputLabelProps={{
        required: true,
        color: 'white',
        shrink: true
      }}
    />
   
    <Button
      className={props.classes.button}
      color='primary'
      type='submit'
      variant='raised'
    >
      Search
    </Button>
  </form>
)

export default withStyles(styles)(Form)
