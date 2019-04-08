/* /src/components/popular-videos/PopularVideos.jsx */
import React from 'react';
import { PopularVideosTop } from './PopularVideosTop.jsx';
import { PopularVideosCarousel } from './PopularVideosCarousel.jsx';
import './popular-videos.css';
export class PopularVideos extends React.Component {
  render() {
    const element = (
      <div className="container-fluid" id="popular-videos">
        <div className="container">
          <div className="row-fluid mb-5 pt-5">
            <PopularVideosTop/>
          </div>
          <div className="row pb-5">
            <PopularVideosCarousel/>
          </div>
        </div>
      </div>

    );
    return element;
  }
}
