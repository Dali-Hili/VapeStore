import React from "react";
import ReactDOM from "react-dom";

import Product from "./components/product.jsx";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Product />{" "}
        </h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
