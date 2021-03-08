import React, { useState }from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Navbarprod from "../navbar/navbarprod.jsx"
import Swal from 'sweetalert2';
import $ from "jquery";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  root: {
    flexGrow: 1,
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    flexGrow: 1,
  }
});
export default function MediaCard(props) {
  const classes = useStyles();
  var order = []
const addTopanie = (product) =>{
  console.log(product)
  if(localStorage.getItem("order")){
    var orderParse = localStorage.getItem( "order") 
    var email = localStorage.getItem("user")
    var parseEmail = JSON.stringify(email)
    console.log(parseEmail);
    order = JSON.parse(orderParse)
    order.push([product.title, product.prise, product.imageUrl,parseEmail])
  localStorage.setItem("order", JSON.stringify(order))
  } else { 
    order.push([product.title, product.prise, product.imageUrl])
    localStorage.setItem("order", JSON.stringify(order))
  }

}
      

  return (
    <div className="card">
      {props.data.map((product, i) => {
        return (
          <div key = {i}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={product.imageUrl} id="prodImage" title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick ={()=>props.changeView("userprod",product,order)}>
                more details
              </Button>
              <Button size="small" color="primary" onClick={()=>{
                 addTopanie(product)
                 Swal.fire({text: "Order has been passed! Please confirm it through the shopping cart"}).then(function(){ 
                  location.reload();
                  })
                 
               }}>
                order now!!!!!!
              </Button>
            </CardActions>
          </Card></div>
        );
      })}
 
              
    </div>
  );
}