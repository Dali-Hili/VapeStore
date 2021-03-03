import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios"
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
  const [state, setState] = useState({
   uptodate: {imageUrl: props.product.imageUrl,
    title:props.product.title ,
    stock: props.product.stock,
    description: props.product.description,
    prise: props.product.prise,},
    id:0
  });
  const getData=(data)=>{
    setState({ uptodate: data }),
    setState({ id: data._id })
  }
 const handleSubmit=() =>{
   
    axios.put(`/api/vapeStore/update/${props.product._id}`,state.uptodate)
        .then((result) => { alert("result") })
        window.location.reload()
}
  const handleChange = (e) => {
    
    switch (e.target.name) {
      case "imageUrl":
        setState({
          uptodate: {
            imageUrl: e.target.value,
            title: state.uptodate.title,
            stock: state.uptodate.stock,
            description: state.uptodate.value,
            prise: state.uptodate.prise
          },
        });
        break;
      case "title":
        setState({
          uptodate: {
            imageUrl: state.uptodate.imageUrl,
            title: e.target.value,
            stock: state.uptodate.stock,
            description: state.uptodate.value,
            prise: state.uptodate.prise
          },
        });
        break;
      case "stock":
        setState({
          uptodate: {
            imageUrl: state.uptodate.imageUrl,
            title: state.uptodate.title,
            stock: e.target.value,
            description: state.uptodate.value,
            prise: state.uptodate.prise
          },
        });
        break;
      case "description":
        setState({
          uptodate: {
            imageUrl: state.uptodate.imageUrl,
            title: state.uptodate.title,
            stock: state.uptodate.stock,
            description: e.target.value,
            prise: state.uptodate.prise
          },
        });
        break;
        case "prise":
            setState({
              uptodate: {
                imageUrl: state.uptodate.imageUrl,
                title: state.uptodate.title,
                stock: state.uptodate.stock,
                description: state.uptodate.description,
                prise: e.target.value
              },
            });
            break;
    }
    console.log(uptodate)
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="filled-basic"
        label="ImageUrl"
        variant="filled"
        name = "imageUrl"
        value={state.uptodate.imageUrl}
        onChange={(e)=>handleChange(e)}
      />
      <TextField
        id="filled-basic"
        label="Title"
        variant="filled"
        name = "title"
        value={state.uptodate.title}
        onChange={(e)=>handleChange(e)}
      />
      <TextField
        id="filled-basic"
        label="Stock"
        variant="filled"
        name="stock"
        value={state.uptodate.stock}
        onChange={(e)=>handleChange(e)}
      />
      <TextField
        id="filled-basic"
        label="Prise"
        variant="filled"
        name="prise"
        value={state.uptodate.prise}
        onChange={(e)=>handleChange(e)}
      />
      <TextField
        id="filled-basic"
        label="Description"
        variant="filled"
        name="description"
        value={state.uptodate.description}
        onChange={(e)=>handleChange(e)}
      />
      <Button className="logoutbtn" color="primary" onClick={handleSubmit}>
        Update
      </Button>
    </form>
  );
}
