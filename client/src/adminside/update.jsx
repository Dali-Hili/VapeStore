import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="filled-basic" label={props.product.imageUrl} variant="filled" />
      <TextField id="filled-basic" label={props.product.title} variant="filled" />
      <TextField id="filled-basic" label={props.product.prise} variant="filled" />
      <TextField id="filled-basic" label={props.product.description} variant="filled" />
      <Button className="logoutbtn" color="primary">Update</Button>
    </form>
  );
}
