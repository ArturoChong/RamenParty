import React, { Component } from 'react';
// Components
import {Top} from "./components/global/Top.jsx";
import {Navbar} from "./components/global/Navbar.jsx";
import {Footer} from "./components/global/Footer.jsx";
import { AppRoutes } from "./components/routes.jsx";

//css
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
      <Top/>
        <Navbar />  
          <div className="Content-Component">
            <div className="container">
              <AppRoutes />
            </div>
          </div>
          <div className="Footer-Component">
            <Footer />
          </div>
        </div>
    );
  }
}