import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Product from "./components/product.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get("/api/vapeStore/products").then((res) => {
      this.setState({ data: res.data });
    });
  }

  render() {
    return (
      <div>
        <h1>
          <Product data={this.state.data} />{" "}
        </h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
