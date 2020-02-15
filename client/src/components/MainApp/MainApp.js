
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

   submitHandler = () => {
      this.setState({renderHome:false})
      this.setState({renderCreateGroup:true})
   }


   render() {
      if (this.state.renderHome) {
         return (
            <HomePage 
               homePageBtn = {this.submitHandler}
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