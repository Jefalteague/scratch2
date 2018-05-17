import React from "react";
import { Component } from "react";

import "../index.css";

class Footer extends Component {
  render(){
    return(

      <div id="footer_main_container">

				<ul className="footer_box">

					<li><a href="#" className="link_style">Home
					</a></li>
					<li><a href="#" className="link_style">About
					</a></li>
					<li><a href="#" className="link_style">Help
					</a></li>
					<li><a href="#" className="link_style">FAQs
					</a></li>

				</ul>

				<ul className="footer_box">

					<li><a href="#" className="link_style">Discover Plants
					</a></li>
					<li><a href="#" className="link_style">Discover Botany
					</a></li>
					<li><a href="#" className="link_style">Privacy Policy
					</a></li>
					<li><a href="#" className="link_style">Terms
					</a></li>


				</ul>

				<ul className="footer_box">

					<li><a href="#" className="link_style">Sign In
					</a></li>
					<li><a href="#" className="link_style">Resources
					</a></li>
					<li><a href="#" className="link_style">Contact Us
					</a></li>
					<li><a href="#" className="link_style">Donate
					</a></li>

				</ul>



				<div id="logo">

					<img id="ewma_logo" src=""/>

					<p className="center_it" id="copyright_statement">Web design and content
2017 EWMAFP
jefalteague@gmail.com>
					</p>

				</div>

			</div>

    );
  }
}

export default Footer;
