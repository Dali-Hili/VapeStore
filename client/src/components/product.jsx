import React from "react";
import Details from "./details.jsx";
import axios from "axios";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  fetchData() {
    axios.get("/api/vapeStore/products").then((res) => {
      this.setState({ data: res.data });
    });
  }

  render() {
    return (
      <div id="semer2">
        <Details />
        <Details />
        <Details />
        <Details />
        <Details />
        <Details />
        <Details />
        <Details />
        <Details />
        <Details />
        <Details />
        <Details />
      </div>
    );
  }
}
