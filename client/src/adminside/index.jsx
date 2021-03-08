import React, { Component } from "react";
import Adminnavbar from "../navbar/navadmin.jsx";
import Adminprod from "./adminprod.jsx";
import axios from "axios";
import Update from "./update.jsx";
import CreateProd from "./createProduct.jsx";
import Orders from "./order.jsx"
import Navbar from "./navbarAdmin.jsx"
import Users from "./users.jsx"
export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      view: "",
      product: null,
      uptodate: { imageUrl: "", title: "", stock: "", description: "" },
    };
    this.handelDelete = this.handelDelete.bind(this);
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
   
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
  handelDelete(id) {
    console.log(id);
    axios
      .delete(`/api/vapeStore/delete/${id}`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }



  renderView() {
    const { view } = this.state;
    if (view === "admin") {
      return (
        <div>
          <Navbar changeView={(view,product) => this.changeView(view,product)} product={this.state.product}/>
          <Adminprod
            changeView={(view,product) => this.changeView(view,product)}
            data={this.state.data}
          />
        </div>
      );
    }
    if (view === "update") {
      return <div> <Navbar changeView={(view,product) => this.changeView(view,product)} product={this.state.product}/> <Update  changeView={(view,product) => this.changeView(view,product)} product={this.state.product} /></div>;
    }
    if(view === "create"){
      return <div> <Navbar changeView={(view,product) => this.changeView(view,product)}/> <CreateProd/>  </div>
    }
    if (view === "order") {
      return <div>  <Navbar changeView={(view,product) => this.changeView(view,product)}/> <Orders /></div>;
    }
    if (view === "user") {
      return <div>  <Navbar changeView={(view,product) => this.changeView(view,product)}/> <Users /></div>;
    }
  }

  render() {
    return (
      <div>
        <div>{this.renderView()}</div>
      </div>
    );
  }
}
