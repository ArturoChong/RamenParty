/* /src/components/popular-videos/PopularVideosCarousel.jsx */
import React from 'react';
export class PopularVideosTop extends React.Component {
  render() {

    const element = (
        <div className="row-fluid mt-4 bg-dark">
          <div className="col-12 fluid">
            <nav className="navbar navbar-dark bg-dark">
              <a className="navbar-brand" >
                <p className="font-weight-bold text-white">
                  POPULAR VIDEOS
                </p>
              </a>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <p className="text-danger">
                      <u>See all news</u>
                    </p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

    );
    return element;
  }
}
