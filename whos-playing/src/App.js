import React, { Component } from 'react';
import './App.css';
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage'
import {Route, Link} from "react-router-dom";
import MapRendering from './components/MapRendering';

export default class App extends Component {

  render() {
    return (

      <div className="App">
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <img src="https://i.imgur.com/WQJOMMK.png" alt="a Who's Playing logo I created with Freelogodesign.org" width={40} height={60} />
            </a>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="https://bulma.io/">
                Home
              </a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
                  Menu
                </a>
                <div className="navbar-dropdown is-boxed">
                  <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
                    Overview
                  </a>
                  <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                    Modifiers
                  </a>
                  <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                    Columns
                  </a>
                  <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                    Layout
                  </a>
                  <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                    Form
                  </a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
                    Elements
                  </a>
                  <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                    Components
                  </a>
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://localhost:4000&via=jgthms">
                      <span className="icon">
                        <i className="fab fa-twitter" />
                      </span>
                      <span>
                        Tweet
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>


        <nav className="Navbar">
          <div><Link to="/">Home</Link></div>
          <div><Link to="/about">About</Link></div>
          <div><Link to="/view-map">View Map</Link></div>
        </nav>
        <main className="Main">
          <div className="MainText">  
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/view-map" component={MapRendering}></Route>
          </div>
        </main>

      </div>
    );
  }
}