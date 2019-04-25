import React, { Component } from "react";
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import MapRendering from './MapRendering'
import {Route, Link} from "react-router-dom";

export default class MenuBar extends Component {    
    render() {
        return (
            <div>
                <nav className="navbar is-light">
                    <div className="navbar-brand">
                        <div className="navbar-item" href="https://google.com">
                            <div><Link to="/"><img src="https://i.imgur.com/WQJOMMK.png" alt="a Who's Playing logo I created with Freelogodesign.org" width={40} height={60} /></Link></div>
                        </div>
                    </div>
                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                            <div className="navbar-item has-dropdown is-hoverable">
                                <div className="navbar-link">
                                    Menu
                                </div>
                                <div className="navbar-dropdown is-boxed">
                                    <div className="navbar-item">
                                        <div><Link to="/">Home</Link></div>
                                    </div>
                                    <div className="navbar-item">
                                        <div><Link to="/about">About</Link></div>
                                    </div>
                                    <div className="navbar-item">
                                        <div><Link to="/view-map">View Map</Link></div>
                                    </div>
                                    <hr className="navbar-divider" />
                                    <a className="navbar-item" href="https://api.seatgeek.com/2/events?client_id=MTYyOTYyOTF8MTU1NTY5OTI3Mi41NQ&client_secret=627366dd78f71acab2d19c6b27df3286ea75eb558451225c7767448f0d8cde02">
                                        SeatGeek API
                                    </a>
                                    <a className="navbar-item" href="http://platform.seatgeek.com/">
                                        SeatGeek Documentation
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <main className="Main">
                    <div className="MainText">  
                        <Route path="/" exact component={HomePage}></Route>
                        <Route path="/about" component={AboutPage}></Route>
                        <Route path="/view-map" component={MapRendering}></Route>
                    </div>
                </main>           
            </div>
        )
    }
}