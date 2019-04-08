/* /src/components/popular-videos/PopularVideoCard.jsx */
import React from 'react';
export class PopularVideoCard extends React.Component {
  render() {
    const classType = this.props.isActive === true ?
      "carousel-item col-auto active" : "carousel-item col-auto";
    const component = (
      <div className={classType}>
        <div className="card">
          
          <img className="card-img-top" src={this.props.src}/>
          <div className="card-body">

            <a href="#">
              <h5 className="card-title text-white">
                {this.props.title}
              </h5>
            </a>

            <h6 className="card-subtitle text-muted">
              {this.props.subtitle}
            </h6>
          </div>
        </div>
      </div>
    );
    return component;
  }
}

PopularVideoCard.defaultProps = {
  isActive: false
}
