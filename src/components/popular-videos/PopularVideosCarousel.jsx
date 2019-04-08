/* /src/components/popular-videos/PopularVideosCarousel.jsx */
import React from 'react';
import { PopularVideoCard } from './PopularVideoCard.jsx';

export class PopularVideosCarousel extends React.Component {
  render() {
    const previousButton = (
      <a class="carousel-control-prev" href="#popularVideosCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
    );
    const nextButton = (
      <a class="carousel-control-next" href="#popularVideosCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    );
    const component = (
      <div id="popularVideosCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner row-fluid">
          <PopularVideoCard title="Best Wordpress Video Themes and Plugins" subtitle="Popular Videos" src="https://via.placeholder.com/255x132?text=SV" isActive={true}/>

          <PopularVideoCard title="POPULUS VULT DECIPI, ERGO DECIPIETUR" subtitle="Latest Videos" src="https://via.placeholder.com/255x132?text=SV"/>

          <PopularVideoCard title="Carthago Delenda Est" subtitle="Popular Videos" src="https://via.placeholder.com/255x132?text=SV"/>
        </div>
        {previousButton}
        {nextButton}
      </div>
    );

    return component;
  }
}
