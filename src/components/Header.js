import React from "react";
import { Component } from "react";

import Navigation from "./Navigation";

import "../index.css";

class Header extends Component {
  render(){
    return(

      <div className="content_main_container">{/*header open*/}
        <div className="header_main_container">
          <div className="header_logo_container">
            <div className="logo_container">
              <div id="left">
                <h1>Flora Project</h1>
              </div>
            </div>
            <div className="slogan_container">
              <div id="right">
                  THE ONLY DATABASE-DRIVEN WEBAPP DEDICATED TO ERWIN FLORA
              </div>
            </div>
          </div>
          <Navigation />
        </div>
      {/*header close*/}
      </div>
    );
  }
}

export default Header;
