import React , { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -8,
    top: 13,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '30 1px',
  },
}))(Badge);
export default function ButtonAppBar(props) {
  const classes = useStyles();
  const [state, setState]= useState({
    order : JSON.parse(localStorage.getItem("order"))
  })
 const logout =  ()=>{
    localStorage.clear()
    window.location.reload()
} 

const showOrder = () =>{
  console.log(state.order)
 
}
const shopping = ()=>{
  if(state.order===undefined){
    state.order= []
  }
}
{shopping()}
const number =()=>{
if(JSON.parse(localStorage.getItem('order'))=== null){
return 0
}else{
  return JSON.parse(localStorage.getItem('order')).length 
}}

  return (
    <div className={classes.root}>
     
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h4" className={classes.title} onClick={()=>props.changeView("pro")} >
            Vapers Store
          </Typography>
          <IconButton aria-label="cart" onClick={()=>props.changeView("showorder")}>
      <StyledBadge badgeContent={number()} color="secondary">
      
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>

          <Button color="inherit" onClick={()=>logout()}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}