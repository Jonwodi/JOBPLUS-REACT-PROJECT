import React from 'react';
import PageTitle from '../components/PageTitle';
import PaperForm from '../components/PaperForm';
import Form from '../components/Form';
import Controls from '../components/controls/Controls';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box: {
    marginBottom: '200px'
  }
}));

export default function Profile() {
    const classes = useStyles();

    const sectors = [
    { name: 'Technology' },
    { name: 'Engineering' },
    { name: 'Health' },
  ];

  return (
    <Box className={classes.box}>
      <PageTitle title='Profile' />
      <PaperForm>
        <Form>
           <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Desired job title" />
            <Controls.TextFieldCustom placeholder="Desired job title" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Min per annum salary" />
            <Controls.TextFieldCustom placeholder="Min per annum salary" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Job type" />
            <Controls.CheckboxCustom value='Permanent' />
            <Controls.CheckboxCustom value='Temporary' />
            <Controls.CheckboxCustom value='Conract' />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Sector" />
            <Controls.SelectCustom items={sectors} />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.InputLabelCustom color='primary' label="Experience" />
            <Controls.TextareaCustom placeholder="Experience" />
          </Controls.FormGroupCustom>

          <Controls.FormGroupCustom>
            <Controls.ButtonCustom text="Submit" />
          </Controls.FormGroupCustom>
        </Form>
      </PaperForm>
    </Box>
  )
}

