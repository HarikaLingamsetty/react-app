import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class Address extends React.Component {
  render() {
    const mapStyles = {
      width: "50%",
      height: "100%",
    };
    return (
      <div className="map">
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 19.8753, lng: 79.95244 }}
        >
          <Marker position={{ lat: 19.8753, lng: 79.95244 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "",
})(Address);
