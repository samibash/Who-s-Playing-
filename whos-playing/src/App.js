import React, { Component } from 'react';
import './App.css';
import MenuBar from './components/MenuBar';
// import MapRendering from './components/MapRendering';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuBar />
      </div>
    );
  }
}