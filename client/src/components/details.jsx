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
                <button>order</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
