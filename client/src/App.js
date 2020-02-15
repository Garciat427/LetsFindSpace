import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainApp from "./components/MainApp/MainApp";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Our App</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
=======
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <MainApp />
          </Route>
        </Switch>
      </Router>
>>>>>>> a5b5d6d2e90caa42a4cf350a5c598d11c56cf638
    );
  }
}

export default App;
