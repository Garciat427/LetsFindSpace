import React, { Component } from "react";
import {
   MDBAnimation,
   MDBMask,
   MDBRow,
   MDBCol,
   MDBBtn,
   MDBView,
   MDBContainer
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
                  />
                  <MDBContainer>

                     <MDBRow style={{ paddingTop: "65%" }}>
                        <MDBCol md="12">
                           {/* Buttons for finding midpoint */}
                           <MDBRow >

                              <MDBCol md="4" className="mx-auto text-center" >
                                 <MDBAnimation type="fadeInDown" delay="1.5s">
                                    <MDBBtn
                                       gradient="purple"
                                       href="#"
                                       name=""
                                       rounded
                                    >MDBBtn</MDBBtn>
                                 </MDBAnimation>
                              </MDBCol>


                              <MDBCol md="4" className="mx-auto text-center">
                                 <MDBAnimation type="fadeInDown" delay="2s">
                                    <MDBBtn
                                       gradient="purple"
                                       href="#"
                                       name=""
                                       rounded
                                    >MDBBtn</MDBBtn>
                                 </MDBAnimation>
                              </MDBCol>


                              <MDBCol md="4" className="mx-auto text-center">
                                 <MDBAnimation type="fadeInDown" delay="2.5s">
                                    <MDBBtn
                                       gradient="purple"
                                       href="#"
                                       name=""
                                       rounded
                                    >MDBBtn</MDBBtn>
                                 </MDBAnimation>
                              </MDBCol>

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
