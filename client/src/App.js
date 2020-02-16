import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainApp from "./components/MainApp/MainApp";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/">
            <MainApp />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
