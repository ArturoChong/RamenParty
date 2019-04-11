import React from 'react';

export class PostCard extends React.Component {
    render() {
        const component = (
            <div className="card pb-4">
                <div className="row no-gutters">
                    <div className="col-fluid">
                        <a ref="#">
                            <img src={this.props.src} alt={this.props.alt} className="img" height="100px" width="100px"/>
                        </a>
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h5 className="card-title text-left">
                                <a href="#" className="text-white">
                                    {this.props.title}
                                </a>
                            </h5>
                            <h6 className="card-subtitle text-muted text-left">
                                {this.props.date}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        );

        return component;
    }
}