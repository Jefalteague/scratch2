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
      <div className={match ? "active" : ""}>
        {match ? "> " : ""}
        <Link to={to}>{label}</Link>
      </div>
    )}
  />
)

class Navigation extends Component {

  render(){
    return(
      <div className="nav">{/*open navigation*/}
        <ul>
          <li>
            <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
          </li>
          <li>
            <OldSchoolMenuLink to="/about" label="About" />
          </li>
          <li>
            <OldSchoolMenuLink to="/contact" label="Contact" />
          </li>
          <li>
            <OldSchoolMenuLink to="/faq" label="Faq" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
