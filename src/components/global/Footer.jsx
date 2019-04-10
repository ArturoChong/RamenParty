import React, { Component } from "react";
import "./css/Footer.css";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-auto py-3" id="footer-component">
        <div className="container">
          <div className="row">
            <div className="col-4">


              <div className="card">
                <div className="card-body">
                  <h2 className="card-title text-white font-weight-bold">
                    Ramen Party
                  </h2>  
                  <h4 className="card-subtitle text-white">
                    ラーメン党
                  </h4>
                  <p className="card-text text-muted">
                    <br/>
                    とりあえず、こういうのはどうだろう。この人生ではいろいろな人があってどうすればちゃんと気持ちを伝えるか分からないな。
                  </p>
                  <form className="form">
                    <input className="form-control mr-sm-2" type="search" placeholder="Your email goes here" aria-label="Search"/>
                    <button className="btn btn-danger my-2 my-sm-0" type="submit">Subscribe</button>
                  </form>
                  <div className="btn-group" role="group" aria-label="Social Media">
                    <a className="nav-link" href="#"><i className="fab fa-youtube"></i> Youtube</a>
                    <a className="nav-link" href="#"> <i className="fab fa-facebook-square"></i> Facebook</a>
                    <a className="nav-link" href="#"><i className="fab fa-instagram"></i> Instagram</a>                           
                  </div>
                </div>
              </div>
              
            </div>
            <div className="col-4">
              <h5 className="text-white font-weight-bold">
                LATEST POSTS
              </h5>
            </div>
            <div className="col-4">
              <h5 className="text-white font-weight-bold">
                POPULAR CATEGORIES
              </h5>
              
            </div>
          </div>
        </div>
      </footer>
    );
  }
}