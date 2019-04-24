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