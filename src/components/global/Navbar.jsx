// eslint-disable-next-line
import React, { Component } from 'react';
import './css/Header.css';

export class Navbar extends Component {
    render() {
        return (
            
            <div className="Navbar-Component">
                <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                    <div className="container">
                        <div class="collapse" id="navbarToggleExternalContent">
                            <div class="bg-dark p-4">
                                <h5 class="text-white h4">Collapsed content</h5>
                                <span class="text-muted">Toggleable via the navbar brand.</span>
                            </div>
                        </div>
                        <button class="navbar-toggler collapsed d-block" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Videos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> <i class="fas fa-cloud-upload-alt"></i> Submit Video |</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"> <i class="fas fa-user"></i> Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}