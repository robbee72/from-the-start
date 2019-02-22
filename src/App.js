import React, { Component } from "react";
import "./App.css";
import Goats from "./components/Goats";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Sports G.O.A.T.S!</h1>

        <h2>
          <Goats />
        </h2>
      </div>
    );
  }
}

export default App;
