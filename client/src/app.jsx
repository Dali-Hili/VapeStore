import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Product from "./components/product.jsx";
import Signup from "./components/signUp.jsx";
import Signin from "./components/signIn.jsx";
import NavBar from "./components/navBar.jsx";
import Pro from "./components/pro.jsx";
import Admin from "./adminside/index.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      view: "details",
      product:null
    };
  }
  componentDidMount() {
    if (localStorage.getItem("token") && localStorage.getItem("token") !== "admin") {
      this.setState({ view: "pro" });
    } else if (localStorage.getItem("token") === "admin"){
      this.setState({ view: "admin" });
    }
    this.fetchData();
  }

  fetchData() {
    axios.get("/api/vapeStore/products").then((res) => {
      this.setState({ data: res.data });
    });
  }

  changeView(view,product) {
    this.setState({
      view: view,
      product:product
    });
  }

  renderView() {
    const { view } = this.state;
    if (view === "details") {
      return <Product data={this.state.data} changeView={(view,product) => this.changeView(view,product)}  />;
    }
    if (view === "signup") {
      return <Signup changeView={(data,product) => this.changeView(data,product)} />;
    }
    if (view === "signin") {
      return <Signin changeView={(data,product) => this.changeView(data,product)} />;
    }
    if (view === "pro") {
      return <Pro changeView={(data,product) => this.changeView(data,product)} />;
    }
    if (view === "admin") {
      return <Admin changeView={(data,product) => this.changeView(data,product)} />;
    }
  }

  render() {
    {
      if (this.state.view !== "admin") {
        return (
          <div>
            <NavBar changeView={(data) => this.changeView(data)} />
            <div>{this.renderView()}</div>
          </div>
        );
      }
    }
    return (
      <div>
        
        <div>{this.renderView()}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
