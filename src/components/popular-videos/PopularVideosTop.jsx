/* /src/components/popular-videos/PopularVideosCarousel.jsx */
import React from 'react';
export class PopularVideosTop extends React.Component {
  render() {
    const previousButton = (
      <a class="carousel-control-prev vertical-divider popular-videos-button" href="#popularVideosCarousel" role="button" data-slide="prev" id="popular-videos-prev-button">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
    );
    const nextButton = (
      <a class="carousel-control-next popular-videos-button" href="#popularVideosCarousel" role="button" data-slide="next" id="popular-videos-next-button">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    );
    const element = (
        <div className="row-fluid mt-4 horizontal-divider">
          <div className="col-12 fluid">
            <nav className="navbar pt-4" id="popular-videos-navbar">
              <a className="navbar-brand" >
                <p className="font-weight-bold text-white vertical-divider">
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
              {previousButton}
              {nextButton}
            </nav>
          </div>
        </div>

    );
    return element;
  }
}
