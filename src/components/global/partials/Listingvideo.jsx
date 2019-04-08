// eslint-disable-next-line
import React, { Component } from 'react';

export class Listingvideo extends Component {
    render() {
        return (
            <div className="bg-videoBlogs p-5 text-white" id="ListingVideo">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                         <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/WUUbNDTq3PU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                         </div>
                        </div>
                        <div className="col-md-4 text-left">
                            <h2>Mangas en Panama</h2>
                            <p class="lead">
                                <span>JANUARY 7, 2019 | </span>
                                
                                <span>FEATURED VIDEO</span>
                            </p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ipsum perspiciatis voluptatibus quisquam at ex exercitationem repellendus cumque.
                                Maiores ipsum perspiciatis voluptatibus quisquam at ex exercitationem repellendus cumque.
                            </p>
                            <button type="button" class="btn btn-danger">Read More</button>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-md-3">
                            <img src="https://via.placeholder.com/255x132?text=SV" alt=""/>
                            <h5>Cinematic Vimeo</h5>
                            <p>JANUARY 16, 2019</p>
                            
                        </div>
                        <div className="col-md-3">
                            <img src="https://via.placeholder.com/255x132?text=SV" alt=""/>
                            <h5>Cinematic Vimeo</h5>
                            <p>JANUARY 16, 2019</p>
                        </div>
                        <div className="col-md-3">
                            <img src="https://via.placeholder.com/255x132?text=SV" alt=""/>
                            <h5>Cinematic Vimeo</h5>
                            <p>JANUARY 16, 2019</p>
                        </div>
                        <div className="col-md-3">
                            <img src="https://via.placeholder.com/255x132?text=SV" alt=""/>
                            <h5>Cinematic Vimeo</h5>
                            <p>JANUARY 16, 2019</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}