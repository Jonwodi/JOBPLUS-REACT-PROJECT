import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { CallMissedSharp, Class } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: '100%',
    bottom: '0px',
    backgroundColor: theme.palette.common.alpha,
    color: theme.palette.common.light,
    textAlign: 'center',
    padding: '15px',
  },
}))



export default function Footer({props}) {
const classes = useStyles();

  return (
    <div className={classes.root}>COPYRIGHT &copy; JobPlus 2021</div>
  )
}
