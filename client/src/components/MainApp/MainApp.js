// -------------------- Import Dependencies --------------------------------
// React Dependencies
import React, { Component } from "react";


//Page Dependencies
import HomePage from "./HomePage";
import CreateGroupPage from "./CreateGroupPage";
import CreateJoinGroup from "./CreateJoinGroupPage";
import MapPage from "./MapPage"

//Axios HTTPS Dependencies
import API from "../../utils/API"

class MainApp extends Component {
  state = {
    //Page Render States
    renderHome: false,
    renderCreateGroup: false,
    renderJoinGroup: false,
    renderMapPage: true,

    //CreateGroupStates
    createGroupNameTxt: "",
    createGroupLocationTxt: "",

    //JoinGroupStates
    joinGroupNameTxt: "",
    joinGroupLocationTxt: "",
    joinGroupCodeTxt: "",

    //CurretMapPageStates
    centerLatitude: 43.653225,
    centerLongitude: -79.383186,
    joinGroupLocationTxt: "",
    joinGroupCodeTxt: "",


  };

  //---Generic Event Handlers---
  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

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

  //---CreateGroupPage Event Handlers---
  submitCreateGroupPage = () => {
    let obj = {
      name: this.state.createGroupNameTxt,
      location: this.state.createGroupLocationTxt
    }
    API.postUserCreateGroup(obj)
      .then(res => {
        console.log(res.data)
        API.refreshMap(res.data)
          .then(res => {
            console.log(res.data)
          })
      })

  }

  //---JoinGroupPage Event Handlers---
  submitJoinGroupPage = () => {
    let obj = {
      name: this.state.createGroupNameTxt,
      location: this.state.createGroupLocationTxt,
      code: this.state.joinGroupCodeTxt
    }
    API.postUserJoinGroup(obj)
      .then(res => {
        console.log(res.data)
        API.refreshMap(res.data)
          .then(res => {
            console.log(res.data)
          })
      })
  }

  render() {
    if (this.state.renderHome) {
      //Render Home Page
      return (
        <HomePage
          renderCreateGroup={this.renderCreateGroup}
          renderJoinGroup={this.renderJoinGroup}
        />
      );
    } else if (this.state.renderCreateGroup) {
      //Render Create Group Page
      return <CreateGroupPage
        handleInputChange={this.handleInputChange}
        createGroupNameTxt={this.state.createGroupNameTxt}
        createGroupLocationTxt={this.state.createGroupLocationTxt}
        submitCreateGroupPage={this.submitCreateGroupPage}
      />;
    } else if (this.state.renderJoinGroup) {
      //Render Join Group Page
      return <CreateJoinGroup
        handleInputChange={this.handleInputChange}
        joinGroupNameTxt={this.state.joinGroupNameTxt}
        joinGroupLocationTxt={this.state.joinGroupLocationTxt}
        joinGroupCodeTxt={this.state.joinGroupCodeTxt}
        submitCreateGroupPage={this.submitCreateGroupPage}
      />;
    } else if (this.state.renderMapPage) {
      //Render Join Group Page
      return <MapPage
        handleInputChange={this.handleInputChange}
        centerLatitude={this.state.centerLatitude}
        centerLongitude={this.state.centerLongitude}
      />;
    }
  }
}

export default MainApp;
