import React from "react";
import { Link, BrowserRouter, HashRouter, Route, IndexRoute, hashHistory } from "react-router-dom";
import { Component } from "react";

import Header from "./Header";
import Midsection from "./Midsection"
import Footer from "./Footer";


class Layout extends Component {
  render() {
    return(
        <BrowserRouter history={hashHistory}>
          <div id="content_main_container">
            <Header />
            <Midsection />
            <Footer />
          </div>
        </BrowserRouter>
    );
  }
}

export default Layout;
