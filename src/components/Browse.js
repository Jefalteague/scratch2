import React from "react";
import { Component } from "react";
import { IndexRoute, Route, Link } from "react-router-dom";

import Basic from "./Basic";
import Family from "./Family";
import Genus from "./Genus";
import Aboutbrowse from "./Aboutbrowse";

class Browse extends Component {
  render(){
    return(
      <div className="aboutsection">
        <div className="aboutleft">
          <Route path="/browse/family">
            <Link to="/browse/family">Family</Link>
          </Route>
          <Route path="/browse/genus">
            <Link to="/browse/genus">Genus</Link>
          </Route>
        </div>
        <div className="aboutright">
          <Route exact path="/browse" component={Basic} />
          <Route path="/browse/family" component={Family}/>
          <Route path="/browse/genus" component={Genus}/>
        </div>
      </div>
    );
  }
}

export default Browse;
