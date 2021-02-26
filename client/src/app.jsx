import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Product from "./components/product.jsx";
import Signup from "./components/signUp.jsx";
import Signin from "./components/signIn.jsx";
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
        <Product data={this.state.data} />
        {/* <Signup/> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
