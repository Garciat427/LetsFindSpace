import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react';
const style = {
   width: '100%',
   height: '100%'
}
const triangleCoords = [
   { lat: 25.774, lng: -80.190 },
   { lat: 18.466, lng: -66.118 },
   { lat: 32.321, lng: -64.757 },
   { lat: 25.774, lng: -80.190 }
];

export class MapContainer extends Component {

   render() {
      console.log(this.props)
      return (
         <Map
            google={this.props.google}
            zoom={14}
            style={style}
            initialCenter={{
               
               lat: this.props.centerLatitude,
               lng: this.props.centerLongitude
            }}
         >
            <Polygon
               paths={triangleCoords}
               strokeColor="#0000FF"
               strokeOpacity={0.8}
               strokeWeight={2}
               fillColor="#0000FF"
               fillOpacity={0.1} />
            <Marker
               name={'uOFt sG'}
               position={{ lat: 43.664395, lng: -79.399427 }} />
            <Marker />

            <InfoWindow onClose={this.onInfoWindowClose}>
               <div>
                  <h1></h1>
               </div>
            </InfoWindow>
         </Map>
      );
   }
}

export default GoogleApiWrapper({
   apiKey: "AIzaSyBOPU0UEp-54JoPFiG3KgcrwxcczUiYNQI"
})(MapContainer)