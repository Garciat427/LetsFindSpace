// -------------------- Import Dependencies --------------------------------
// React Dependencies
import React, { Component } from "react";

//Page Dependencies
import HomePage from "./HomePage";
import CreateGroupPage from "./CreateGroupPage";
import CreateJoinGroup from "./CreateJoinGroupPage";

class MainApp extends Component {
  state = {
    //Page Render States
    renderHome: true,
    renderCreateGroup: false,
    renderJoinGroup: false

    //CreateGroupStates
  };

  //---Homepage Event handlers---

  //Create Group Handler
  renderCreateGroup = () => {
    this.setState({
      renderHome: false,
      renderCreateGroup: true,
      renderJoinGroup: false
    });
  };

  renderJoinGroup = () => {
    this.setState({
      renderHome: false,
      renderCreateGroup: false,
      renderJoinGroup: true
    });
  };

  render() {
    if (this.state.renderHome) {
      return (
        <HomePage
          renderCreateGroup={this.renderCreateGroup}
          renderJoinGroup={this.renderJoinGroup}
        />
      );
    } else if (this.state.renderCreateGroup) {
      return <CreateGroupPage submitHandler={this.submitHandler} />;
    } else if (this.state.renderJoinGroup) {
      return <CreateJoinGroup submitHandler={this.submitHandler} />;
    }
  }
}

export default MainApp;
