import React from "react";
import { Component } from "react";

import Navigation from "./Navigation";

import "../index.css";

class Header extends Component {
  render(){
    return(

      <div className="header">{/*header open*/}

        <h1>This is the header.</h1>
        <Navigation />
      {/*header close*/}
      </div>
    );
  }
}

export default Header;
