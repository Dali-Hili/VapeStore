import React, { Component } from "react";
import Adminnavbar from "../navbar/navadmin.jsx";
import Adminprod from "./adminprod.jsx";
import axios from "axios";
import Update from "./update.jsx";
import CreateProd from "./createProduct.jsx";
import Orders from "./order.jsx"
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
          <Adminprod
            changeView={(view,product) => this.changeView(view,product)}
            data={this.state.data}
          />
        </div>
      );
    }
    if (view === "update") {
      return <Update  changeView={(view,product) => this.changeView(view,product)} product={this.state.product} />;
    }
    if(view === "create"){
      return <CreateProd/>
    }
    if (view === "order") {
      return <div>  <Orders changeView={(view,product) => this.changeView(view,product) } /></div>;
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
