import React, { Component } from "react";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Footer/Footer";
import Aux from "../Aux/Aux";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <Footer />
      </Aux>
    );
  }
}

export default Layout;
