import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="filled-basic" label="ImageUrl" variant="filled"  />
      <TextField id="filled-basic" label="Title" variant="filled"  />
      <TextField id="filled-basic" label="Stock" variant="filled"/>
      <TextField id="filled-basic" label="Description" variant="filled"/>
      <TextField id="filled-basic" label="Prise" variant="filled"/>
      <Button>update</Button>
    </form>
  );
} 