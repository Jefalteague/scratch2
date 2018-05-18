import React from "react";
import { Component } from "react";

class Home extends Component {
  render(){
    return(
    <div>
      <div className="center_it" id="banner_img">

      </div>

      <div className="discover" id="discover_plants">

				<h1 className="center_it">Discover Plants!</h1>

				<div className="center_it" id="center_it">

					<div className="info_box">

						<p>Hundreds of plants! Right at your finger tips. Click on the button below to start learning what is in the Erwin Wildlife Management Area.</p>

					</div>

				</div>

				<div className="center_it">

					<a href="" className="center_it">

						<img src="" className="button_img" />

					</a>

				</div>

			</div>

			<div className="discover" id="discover_botany">

				<h1 className="center_it">Discover Botany!</h1>

				<div className="center_it" id="center_it">

					<div className="info_box">

						<p>Hundreds of terms! Right at your finger tips. Click on the button below to start learning the terminology you need to understand the flora of EWMA.</p>

					</div>

				</div>

				<div className="center_it">

					<a href="" className="center_it">

						<img src="" className="button_img"/>

					</a>

				</div>

			</div>
    </div>
    );
  }
}

export default Home;
