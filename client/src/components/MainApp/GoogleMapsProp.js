import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const style = {
   width: '100%',
   height: '100%'
}


export class MapContainer extends Component {

   state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
   };

   onMarkerClick = (props, marker, e) =>
      this.setState({
         selectedPlace: props,
         activeMarker: marker,
         showingInfoWindow: true
      });

   onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
         this.setState({
            showingInfoWindow: false,
            activeMarker: null
         })
      }
   };

   render() {
      return (
         <Map
            onClick={this.onMapClicked}
            google={this.props.google}
            zoom={14}
            style={style}
            initialCenter={{
               lat: this.props.centerLatitude,
               lng: this.props.centerLongitude
            }}
         >

            <Marker
               name={this.props.placeName}
               value={this.props.placeAddress}
               position={{
                  lat: this.props.centerLatitude,
                  lng: this.props.centerLongitude
               }}
               onClick={this.onMarkerClick}

            />

            {console.log(this.props.currentUserArray)}
            {this.props.currentUserArray.map((currentUser) =>
               <Marker
                  value=""
                  onClick={this.onMarkerClick}
                  key={currentUser._id}
                  name={currentUser.name}
                  title={currentUser.name}
                  position={{
                     lat: currentUser.location.lat,
                     lng: currentUser.location.lng
                  }}
                  icon={{
                     url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
                  }}
               />
            )}



            <InfoWindow
               marker={this.state.activeMarker}
               visible={this.state.showingInfoWindow}>
               <div>
                  <h3>{this.state.selectedPlace.name}</h3>
                  <h5>{this.state.selectedPlace.value}</h5>
               </div>
            </InfoWindow>
         </Map>
      );
   }
}

export default GoogleApiWrapper({
   apiKey: "AIzaSyBOPU0UEp-54JoPFiG3KgcrwxcczUiYNQI"
})(MapContainer)