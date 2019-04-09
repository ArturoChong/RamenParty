/* /src/components/popular-videos/PopularVideosCarousel.jsx */
import React from 'react';
import { PopularVideoCard } from './PopularVideoCard.jsx';

export class PopularVideosCarousel extends React.Component {
  render() {
    const component = (
      <div id="popularVideosCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="row-fluid">
            <PopularVideoCard title="Best Wordpress Video Themes and Plugins" subtitle="Popular Videos" src="https://via.placeholder.com/255x132?text=SV" isActive={true}/>

            <PopularVideoCard title="POPULUS VULT DECIPI, ERGO DECIPIETUR" subtitle="Latest Videos" src="https://via.placeholder.com/255x132?text=SV"/>

            <PopularVideoCard title="Carthago Delenda Est" subtitle="Popular Videos" src="https://via.placeholder.com/255x132?text=SV"/>
          </div>
        </div>
      </div>
    );

    return component;
  }
}
