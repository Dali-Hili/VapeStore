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

import React from "react";

export default class product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="product">
        {this.props.data.map((prod, key) => {
          return (
            <div className="card" key={key}>
              <div className="img">
                <img src={prod.imageUrl} alt="" />
              </div>
              <div className="title">{prod.title}</div>
              <div className="desc">{prod.description}</div>
              <div className="btn">
                <button>details</button>
                <button>order</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
