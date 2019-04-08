import React, { Component } from 'react';
// Components
import {Top} from "./components/global/Top.jsx";
import {Navbar} from "./components/global/Navbar.jsx";
import {Footer} from "./components/global/Footer.jsx";
import { AppRoutes } from "./components/routes.jsx";
import { PopularVideos } from "./components/popular-videos/PopularVideos.jsx";
//css
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
      <Top/>
        <Navbar />
          <div className="Content-Component">
              <AppRoutes />
              <PopularVideos />
          </div>
          <div className="Footer-Component">
            <Footer />
          </div>
        </div>
    );
  }
}
