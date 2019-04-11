/* src/components/global/Footer.jsx*/
import React, { Component } from "react";
import "./css/Footer.css";
import { PostCard} from "../cards/PostCard.jsx";
import { TextBox } from "../textbox/TextBox.jsx";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-auto py-3" id="footer-component">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title text-white font-weight-bold">
                    Ramen Party
                  </h2>  
                  <h4 className="card-subtitle text-muted">
                    ラーメン党
                  </h4>
                  <p className="card-text text-muted">
                    <br/>
                    とりあえず、こういうのはどうだろう。この人生ではいろいろな人があってどうすればちゃんと気持ちを伝えるか分からないな。
                  </p>
                  <form className="form">
                    <input className="form-control text-center" type="search" placeholder="Your email goes here" aria-label="Search"/>
                    <button className="btn btn-danger" type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
              
            </div>
            <div className="col-4">
              <h5 className="text-white font-weight-bold text-left pb-4">
                LATEST POSTS
              </h5>
              <PostCard title="Nihil novi sub soli" date="April 10, 2019" src="https://via.placeholder.com/255x132?text=SV" alt="nope"/>
              <PostCard title="Cartago Delenda Est" date="April 10, 2019" src="https://via.placeholder.com/255x132?text=SV" alt="nope"/>
              <PostCard title="人を殺すのために生まれてきたの！" date="April 10, 2019" src="https://via.placeholder.com/255x132?text=SV" alt="nope"/>
            </div>
            <div className="col-3-fluid">
              <h5 className="text-white font-weight-bold text-left pb-4">
                POPULAR CATEGORIES
              </h5>
              <TextBox categories={[{name:'Featured Video', amount:1}, {name:'Lastest Videos', amount:7}, {name:'Outfits', amount:5}, {name:'Popular Videos', amount:5}, {name:'Trending Videos', amount:4}]}/>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}