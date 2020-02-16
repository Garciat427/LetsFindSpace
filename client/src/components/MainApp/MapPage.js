import React, { Component } from "react";
import {
   MDBAnimation,
   MDBMask,
   MDBRow,
   MDBCol,
   MDBBtn,
   MDBView,
   MDBContainer,
   MDBTypography
} from "mdbreact";

import GoogleMapsProp from "./GoogleMapsProp"

class MapPage extends Component {
   render() {
      return (
         <div>
            <MDBView
               src={`https://mdbootstrap.com/img/Photos/Others/gradient2.png`}
            >
               <MDBMask className="rgba-purple-slight d-flex justify-content-center">
                  <GoogleMapsProp
                     centerLatitude={this.props.centerLatitude}
                     centerLongitude={this.props.centerLongitude}
                     currentUserArray={this.props.currentUserArray}
                     placeName={this.props.placeName}
                     placeAddress={this.props.placeAddress}
                  />
                  <MDBContainer>
                     <MDBRow>
                        <MDBCol>
                           <MDBTypography note noteColor='primary' noteTitle='Group Code: ' className="text-center">
                              {this.props.currentGroupCode}
                           </MDBTypography>
                           <h1></h1>
                        </MDBCol>
                     </MDBRow>
                     <MDBRow style={{ paddingTop: "55%" }}>
                        <MDBCol md="12">
                           {/* Buttons for finding midpoint */}
                           <MDBRow >

                              <MDBCol md="4" className="mx-auto text-center" >
                                 <MDBAnimation type="fadeInDown" delay="1.5s">
                                    <MDBBtn
                                       hidden={!this.props.userTypeIsOwner}
                                       disabled={!this.props.userTypeIsOwner}
                                       gradient="purple"
                                       href="#"
                                       name="cafe"
                                       rounded
                                       onClick={this.props.handleMidpointSearch}
                                    >Find Coffee Shops</MDBBtn>
                                 </MDBAnimation>
                              </MDBCol>


                              <MDBCol md="4" className="mx-auto text-center">
                                 <MDBAnimation type="fadeInDown" delay="2s">
                                    <MDBBtn
                                       hidden={!this.props.userTypeIsOwner}
                                       disabled={!this.props.userTypeIsOwner}
                                       gradient="purple"
                                       href="#"
                                       name="park"
                                       rounded
                                       onClick={this.props.handleMidpointSearch}
                                    >Find Parks</MDBBtn>
                                 </MDBAnimation>
                              </MDBCol>


                              <MDBCol md="4" className="mx-auto text-center">
                                 <MDBAnimation type="fadeInDown" delay="2.5s">
                                    <MDBBtn
                                       hidden={!this.props.userTypeIsOwner}
                                       disabled={!this.props.userTypeIsOwner}
                                       gradient="purple"
                                       href="#"
                                       name="library"
                                       rounded
                                       onClick={this.props.handleMidpointSearch}
                                    >Find Library</MDBBtn>
                                 </MDBAnimation>
                              </MDBCol>

                           </MDBRow>

                           {/* Buttons for finding midpoint */}
                           <MDBRow className="pt-2" >
                              <MDBCol md="2" />

                              <MDBCol md="8" className="mx-auto text-center">

                                 <MDBAnimation type="fadeInUp" delay="3s">
                                    <MDBBtn

                                       gradient="aqua"
                                       href="#"
                                       name=""
                                       rounded
                                       onClick={this.props.RefreshBtnClickEvent}
                                    >Refresh</MDBBtn>
                                 </MDBAnimation>
                              </MDBCol>

                              <MDBCol md="2" />
                           </MDBRow>

                        </MDBCol>
                     </MDBRow>
                  </MDBContainer>
               </MDBMask>
            </MDBView>
         </div>
      );
   }
}

export default MapPage;
