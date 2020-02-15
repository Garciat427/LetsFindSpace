
// -------------------- Import Dependencies --------------------------------
// React Dependencies
import React, { Component } from "react";

//Page Dependencies
import HomePage from "./HomePage"
import CreateGroupPage from "./CreateGroupPage"


class MainApp extends Component {
   state = {
      //Page Render States
      renderHome: true,
      renderCreateGroup:false

      //CreateGroupStates
      

   };
   
   //---Homepage Event handlers---

   //Create Group Handler
   renderCreateGroup = () => {
      this.setState({renderHome:false})
      this.setState({renderCreateGroup:true})
   }

   renderJoinGroup = () => {
      this.setState({renderHome:false})
      this.setState({renderJoinGroup:true})
   }


   render() {
      if (this.state.renderHome) {
         return (
            <HomePage 
               renderCreateGroup = {this.renderCreateGroup}
               renderJoinGroup = {this.renderJoinGroup}
            />
         );
      } else {
         return (
            <CreateGroupPage 
               submitHandler = {this.submitHandler}
            />
         )
      }

   }
}


export default MainApp;