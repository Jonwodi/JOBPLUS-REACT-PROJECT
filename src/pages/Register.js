import React from 'react'
import Form from '../components/Form'
import PageTitle from '../components/PageTitle'
import PaperForm from '../components/PaperForm'
import Controls from '../components/controls/Controls'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  registerForm: {
    marginBottom: '300px'
  }
}))
export default function Register() {
  const classes = useStyles();
  return (
    <div className={classes.registerForm}>
      <PageTitle title='Register' />
      <PaperForm >
        <Form>
          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="First name" />
            <Controls.TextFieldCustom placeholder="First name" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Last name" />
            <Controls.TextFieldCustom placeholder="Last name" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Email" />
            <Controls.TextFieldCustom type="email" placeholder="Email" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Choose Password" />
            <Controls.TextFieldCustom type="password" placeholder="Choose Password" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Confirm Password" />
            <Controls.TextFieldCustom type="password" placeholder="Confirm Password" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.ButtonCustom text="Register" />
          </Controls.FormGroupCustom>
        </Form>
        <p className={'Footer'}>Already have an account? <Link to="/login">Login</Link></p>
      </PaperForm>
    </div>
  )
}
