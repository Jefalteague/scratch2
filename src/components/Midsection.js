import React from "react";
import { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Faq from "./Faq";
import Contact from "./Contact";

import "../index.css";

class Midsection extends Component {
  render(){
    return(

      <div className="midsection">

        <h1 className="titles">This is the middle section.</h1>

          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/faq" component={Faq}></Route>
          <Route path="/contact" component={Contact}></Route>

      </div>
    );
  }
}

export default Midsection;
