// import React from "react";
// export default class Product extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <div className="test">
//         {this.props.data.map((prod, index) => {
//           return (
//             <div>
//               <div>
//                 image="https://media.threatpost.com/wp-content/uploads/sites/103/2019/09/26105755/fish-1.jpg" title="Contemplative Reptile"
//               </div>
//               Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
//               <Button size="small" color="primary">
//                 Share
//               </Button>
//               <Button size="small" color="primary">
//                 Learn More
//               </Button>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }
//
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <div className="card">
      {props.data.map((el, i) => {
        return (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={el.imageUrl} title="Contemplative Reptile" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {el.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {el.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                more dteails
              </Button>
              <Button size="small" color="primary">
                order now!
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}