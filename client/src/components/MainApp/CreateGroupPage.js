import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBCollapse,
  MDBInput,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline
} from "mdbreact";

class CreateGroupPage extends Component {
  render() {
    const navStyle = { marginTop: "4rem" };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
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
                    Create Group Page
                  </h1>

                  <MDBCol md="4" className="mx-auto">
                    <MDBInput hint="Enter your name" />
                    <MDBInput hint="Enter your location" />

                    <MDBBtn
                      rounded
                      className="btn-purple"
                      onClick={this.props.renderCreateGroup}
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
