
// -------------------- Import Dependencies --------------------------------
// React Dependencies
import React, {Component} from "react";

import {  MDBBtn  } from "mdbreact";
//Page Dependencies


 class HomePage extends Component {

   render() {
      return (
         <div>
            {console.log(this.props)}
            <h1>Home</h1>
            <MDBBtn 
            onClick={this.props.homePageBtn}
            >
               Test
            </MDBBtn>
         </div>
   
      )
   }
   

}

export default HomePage;