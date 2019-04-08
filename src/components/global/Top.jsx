// eslint-disable-next-line
import React, { Component } from 'react';
import './css/Header.css';

export class Top extends Component {
    render() {
        return (
            <div className="" id="TopHeader">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                    <a class="navbar-brand" href="#">Ramen Party</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="form-inline my-2 my-lg-0 col-md">
                            <input class="form-control mr-sm-2 col-md-11" type="search" placeholder="Search for a video" aria-label="Search"/>
                            <button class="btn btn-outline-secondary my-2 my-sm-0 col-md" type="submit"><i class="fas fa-search"></i></button>
                        </form>
                            <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#"><i class="fab fa-youtube"></i> Youtube</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#"> <i class="fab fa-facebook-square"></i> Facebook</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="#"><i class="fab fa-instagram"></i> Instagram</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}