import React, { Component } from 'react';
import './App.css';
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage'
// import Map from './components/Map/Map'
import {Route, Link} from "react-router-dom";

export default class App extends Component {

  render() {
    return (

      <div className="App">
        <nav className="Navbar">
          <div><Link to="/">Home</Link></div>
          <div><Link to="/about">About</Link></div>
        </nav>
        <main className="Main">
          <div className="MainText">  
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/about" component={AboutPage}></Route>
          </div>
          {/* <div className="MapContainer">
            <Map component={Map} linkdata={this.state.linkdata} />
          </div> */}
        </main>
      </div>
    );
  }
}