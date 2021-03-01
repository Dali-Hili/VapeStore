import React, { Component } from "react";
import Adminnavbar from "../navbar/navadmin.jsx";
import Adminprod from "./adminprod.jsx";
import axios from "axios";
export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      view: "details",
      product: null,
    };
  }
  componentDidMount() {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") !== "admin"
    ) {
      this.setState({ view: "pro" });
    } else if (localStorage.getItem("token") === "admin") {
      this.setState({ view: "admin" });
    }
    this.fetchData();
  }
  fetchData() {
    axios.get("/api/vapeStore/products").then((res) => {
      this.setState({ data: res.data });
    });
  }
  changeView(view, product) {
    this.setState({
      view: view,
      product: product,
    });
  }
  renderView() {
    const { view } = this.state;
    
      return (
        <div>
        
          <Adminprod
            data={this.state.data}
            changeView={(view, product) => this.changeView(view, product)}
          />
        </div>
      );
    
  }
  render() {
    return (
      <div>
          
        <div>{this.renderView()}</div>
      </div>
    );
  }
}
