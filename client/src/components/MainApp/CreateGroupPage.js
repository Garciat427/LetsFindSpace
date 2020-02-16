import React, { Component } from "react";
import {
  MDBInput,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer
} from "mdbreact";

class CreateGroupPage extends Component {
  render() {
    return (
      <>
        <MDBView
          src={`https://mdbootstrap.com/img/Photos/Others/gradient2.png`}
        >
          <MDBMask className="rgba-purple-slight d-flex justify-content-center align-items-center">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="mb-4 text-center">
                  <h1
                    className="display-4 font-weight-bold mb-0 pt-md-5 pt-5 text-white"
                    style={{ textShadow: "1px 1px 5px gray" }}
                  >
                    Create Group
                  </h1>

                  <MDBCol md="4" className="mx-auto">
                    {/* Textbox - User Name */}
                    <MDBInput 
                      hint="Enter your name"
                      onChange={this.props.handleInputChange}
                      value={this.props.createGroupNameTxt}
                      name="createGroupNameTxt" 
                    />

                    {/* Textbox - User Address or current location */}
                    <MDBInput 
                      hint="Enter your location"
                      onChange={this.props.handleInputChange}
                      value={this.props.createGroupLocationTxt}
                      name="createGroupLocationTxt"  
                    />


                    <MDBBtn
                      rounded
                      className="btn-purple"
                      onClick={this.props.submitCreateGroupPage}
                    >
                      Create Group
                    </MDBBtn>
                  </MDBCol>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </>
    );
  }
}

export default CreateGroupPage;
