import React, { Component } from 'react';
import logo from './logo.svg';
import weather from './getWeather';
import './App.css';

const zipCode = 22309;


class Weather extends Component {
  render() {
    return (
      <p>
      this rendered
      {this.props.val}
      </p>
    );
  }
}

class App extends Component {
  renderWeather(data) {
    return <Weather val={data} />;
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
        {
          weather(zipCode).then((data) => {
            console.log(data);
            this.renderWeather(data);
          })
        }
      </div>
    );
  }
}

export default App;
