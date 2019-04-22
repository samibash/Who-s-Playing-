import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }


  componentDidMount() {
    const API_KEY = "MTYyOTYyOTF8MTU1NTY5OTI3Mi41NQ"

    const url = (`https://api.seatgeek.com/2/events?client_id=${API_KEY}`)
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
    }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          BLOOP
        </header>
      </div>
    );
  }
}

export default App;
