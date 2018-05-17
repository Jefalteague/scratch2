import React from "react";
import { Route } from "react-router-dom";
import { Component } from "react";
import { Link } from 'react-router-dom';

/*taken from official router training website. would like to create my own.*/
const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <div className="header_nav_box">
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
)

class Navigation extends Component {

  render(){
    return(
      <div className="header_nav_container">{/*open navigation*/}
        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
        <OldSchoolMenuLink to="/about" label="About" />
        <OldSchoolMenuLink to="/contact" label="Contact" />
        <OldSchoolMenuLink to="/faq" label="Faq" />
      </div>
    );
  }
}

export default Navigation;
