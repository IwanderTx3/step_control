import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
    constructor(props) {
      // initialize the parent class which is Component
      super(props)
  
      this.state = {
        currentValue : 100,
      }}

      handleAddButtonClick = (() => {
  
        let newValue = this.state.currentValue +1
        this.setState({
          currentValue : newValue
        })
    
      })

      handlesubtractButtonClick = (() => {
  
        let newValue = this.state.currentValue -2
        this.setState({
          currentValue : newValue
        })
    
      })

      render() {
    return (
      <div className="stepper">
        <button onClick={this.handlesubtractButtonClick} className="decrease">-</button>
        <div className="current">{this.state.currentValue}</div>
        <button onClick={this.handleAddButtonClick} className="increase">+</button>
      </div>
    );
  }
}

export default App;
