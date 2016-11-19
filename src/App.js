import React, { Component } from 'react';
import logo from './logo.svg';
import weather from './getWeather.js';
import './App.css';

let zipCode = 22309;


let curWeather = weather(zipCode, (data) => data.weather[0].main);


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro" >
          To get started, edit <code>src/App.js</code> and save to reload.
          {curWeather}
        </p>
      </div>
    );
  }
}

export default App;
