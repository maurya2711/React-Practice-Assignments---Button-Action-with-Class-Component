import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.para = this.para.bind(this);
  }

  para() {
    this.setState({
      isClicked: !this.state.isClicked
    });
  }
  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.para}>
          Click Me!!!
        </button>
        {this.state.isClicked && (
          <p>
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )}
      </div>
    );
  }
}

export default App;
