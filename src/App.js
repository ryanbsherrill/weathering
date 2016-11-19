import React, { Component } from 'react';
import logo from './logo.svg';
import weather from './getWeather.js';
import './App.css';

let zipCode = 22309;

let curnWeather = () => weather(zipCode, (data) => console.log(data.weather[0].main));

class Weather extends Component{
  render() {
    return (
      <p>
        {this.props.val}
      </p>
    );
  }
}

class App extends Component {
  renderWeather(weatherName) {
    return <Weather val={weatherName}/>;
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro" >
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {weather(22309, this.renderWeather)}
      </div>
    );
  }
}

export default App;
