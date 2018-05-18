import React from "react";
import { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import Browse from "./Browse";
import Faq from "./Faq";
import Contact from "./Contact";

import "../index.css";

class Midsection extends Component {
  render(){
    return(

      <div className="midsection">

          <Route path="/" exact component={Home}></Route>
          <Route path="/browse" component={Browse}></Route>
          <Route path="/faq" component={Faq}></Route>
          <Route path="/contact" component={Contact}></Route>

      </div>
    );
  }
}

export default Midsection;
