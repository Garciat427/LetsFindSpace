// -------------------- Import Dependencies --------------------------------
// React Dependencies
import React, { Component } from "react";


//Page Dependencies
import HomePage from "./HomePage";
import CreateGroupPage from "./CreateGroupPage";
import JoinGroup from "./JoinGroupPage";
import MapPage from "./MapPage"

//Axios HTTPS Dependencies
import API from "../../utils/API"

class MainApp extends Component {
  state = {
    //Page Render States
    renderHome: true,
    renderCreateGroup: false,
    renderJoinGroup: false,
    renderMapPage: false,

    //CreateGroupStates
    createGroupNameTxt: "",
    createGroupLocationTxt: "",

    //JoinGroupStates
    joinGroupNameTxt: "",
    joinGroupLocationTxt: "",
    joinGroupCodeTxt: "",

    //CurretMapPageStates
    centerLatitude: "",
    centerLongitude: "",
    placeName: "",
    placeAddress: "",


    //Generic States
    currentGroupCode: "",
    currentUserArray: [],
    userTypeIsOwner: true
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
    console.log("Submitting C Group")
    let obj = {
      name: this.state.createGroupNameTxt,
      location: this.state.createGroupLocationTxt
    }
    API.postUserCreateGroup(obj)
      .then(res => {
        this.setState({ currentGroupCode: res.data.code })
        let tempObj = {
          code: res.data.code
        }
        API.refreshMap(tempObj)
          .then(res => {
            console.log(res.data)
            this.setState({
              userTypeIsOwner: true,
              centerLatitude: res.data.users[0].location.lat,
              centerLongitude: res.data.users[0].location.lng,
              currentUserArray: res.data.users,
              renderCreateGroup: false,
              renderMapPage: true
            })
          })
      })

  }

  //---JoinGroupPage Event Handlers---
  submitJoinGroupPage = () => {

    let obj = {
      name: this.state.joinGroupNameTxt,
      location: this.state.joinGroupLocationTxt,
      code: this.state.joinGroupCodeTxt
    }
    API.postUserJoinGroup(obj)
      .then(res => {
        this.setState({ currentGroupCode: res.data.code })
        let tempObj = {
          code: res.data.code
        }

        API.refreshMap(tempObj)
          .then(res => {
            console.log(res.data)
            let curUser = res.data.users.length - 1
            this.setState({
              centerLatitude: res.data.users[curUser].location.lat,
              centerLongitude: res.data.users[curUser].location.lng,
              currentUserArray: res.data.users,
              renderJoinGroup: false,
              renderMapPage: true
            })
          })
      })
  }

  //---Map Page Event Handlers---
  RefreshBtnClickEvent = () => {
    let tempObj = {
      code: this.state.currentGroupCode
    }
    API.refreshMap(tempObj)
      .then(res => {
        console.log(res.data)
        if (res.data.meetingPlace) {

          this.setState({
            centerLatitude: res.data.meetingPlace[0].location[0].lat,
            centerLongitude: res.data.meetingPlace[0].location[0].lng,
          })
        }
        this.setState({
          currentUserArray: res.data.users,
        })
      })
  }

  handleMidpointSearch = (event) => {
    let search = event.target.name
    let tempObj = {
      code: this.state.currentGroupCode
    }
    console.log(tempObj)
    API.findMidpoint(tempObj)
      .then(res => {
        let tempObj2 = {
          lng: res.data.location[0].lng,
          lat: res.data.location[0].lat,
          search: search,
          code: this.state.currentGroupCode
        }
        API.findPlace(tempObj2)
          .then(res => {
            this.setState({
              centerLatitude: res.data.location.lat,
              centerLongitude: res.data.location.lng,
              placeName: res.data.name,
              placeAddress: res.data.address
            })


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
      return <JoinGroup
        handleInputChange={this.handleInputChange}
        joinGroupNameTxt={this.state.joinGroupNameTxt}
        joinGroupLocationTxt={this.state.joinGroupLocationTxt}
        joinGroupCodeTxt={this.state.joinGroupCodeTxt}
        submitJoinGroupPage={this.submitJoinGroupPage}
      />;
    } else if (this.state.renderMapPage) {
      //Render Join Group Page
      return <MapPage
        userTypeIsOwner={this.state.userTypeIsOwner}
        handleInputChange={this.handleInputChange}
        centerLatitude={this.state.centerLatitude}
        centerLongitude={this.state.centerLongitude}
        RefreshBtnClickEvent={this.RefreshBtnClickEvent}
        handleMidpointSearch={this.handleMidpointSearch}
        currentGroupCode={this.state.currentGroupCode}
        currentUserArray={this.state.currentUserArray}
        placeName={this.state.placeName}
        placeAddress={this.state.placeAddress}
      />;
    }
  }
}

export default MainApp;
