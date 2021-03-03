import React, { Component } from "react";
import Adminnavbar from "../navbar/navadmin.jsx";
import Adminprod from "./adminprod.jsx";
import axios from "axios";
import Update from "./update.jsx";
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
    this.getdata = this.getdata.bind(this)
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
  getdata() {
    this.setState({ uptodate: this.state.data });
  }
  // handleChange(e) {
  //   switch (e.target.name) {
  //       case "imageUrl":
  //           this.setState({ uptodate: { imageUrl: e.target.value, title: this.state.uptodate.title, stock: this.state.uptodate.stock, description: this.state.uptodate.value} })
  //           break;
  //       case "title":
  //           this.setState({ uptodate: { imageUrl: this.state.uptodate.imageUrl, title: e.target.value, stock: this.state.uptodate.stock, description: this.state.uptodate.value} })
  //           break;
  //       case "stock":
  //           this.setState({ uptodate: { imageUrl: this.state.uptodate.imageUrl, title: this.state.uptodate.title, stock: e.target.value ,description: this.state.uptodate.value } })
  //           break;
  //       case "description":
  //           this.setState({ uptodate: { imageUrl: this.state.uptodate.imageUrl, title: this.state.uptodate.title,stock:this.state.uptodate.stock, description: e.target.value } })
  //             break;
  //   }
  //   console.log({uptodate});

// }

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
      return <Update/>;
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
