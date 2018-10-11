import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p class='rollovable'>hola</p>
          <button class="generic-button rollovable">This is a test button</button>
          <button class="extended-button">This is a test button</button>
        </header>
      </div>
    );
  }
}

export default App;
