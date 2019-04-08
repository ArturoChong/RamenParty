//Dependecies
import React, { Component } from "react";

//components
import {Listingvideo} from "../global/partials/Listingvideo.jsx"
import "./home.css"

export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Listingvideo/>
      </div>
    );
  }
}