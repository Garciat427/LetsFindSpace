import React, { Component } from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation
} from "mdbreact";
import gradientImg from "./gradient2.png"
import logo from "./logo.png"

class Home extends Component {
  render() {
    return (
      <>
        <MDBView
          src={gradientImg}
        >
          <MDBMask className="rgba-purple-slight d-flex justify-content-center align-items-center">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="3" />
                <MDBCol md="6">
                  <MDBAnimation type="fadeInDown">
                    <img src={logo} className="img-fluid " />
                  </MDBAnimation>
                </MDBCol>
                <MDBCol md="3" />
              </MDBRow>

              <MDBRow>
                <MDBCol md="12" className="mb-4 text-center">
                <MDBAnimation type="fadeInDown" delay="1s">
                  <h5 className=" pt-sm-2 pb-md-5 pb-sm-3 pb-5">
                    {" "}
                    The fair way to plan meetings.{" "}
                  </h5>
                  </MDBAnimation>
                  <MDBAnimation type="fadeInUp" delay="1.5s">
                  <MDBBtn
                    rounded
                    gradient="purple"
                    onClick={this.props.renderCreateGroup}
                  >
                    Create Group
                  </MDBBtn>

                  <MDBBtn
                    outline
                    gradient="blue"
                    rounded
                    onClick={this.props.renderJoinGroup}
                  >
                    Join Group
                  </MDBBtn>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </>
    );
  }
}

export default Home;
