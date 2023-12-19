import React, { useState } from "react";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import ChangeMapView from "./ChangeMapView";

const MapDisplay = ({ position }) => {
  if (position.lat === undefined || position.long === undefined) {
    return <div>Error: Latitude and Longitude are required.</div>;
  }

  const center = [Number(position.lat), Number(position.long)];

  return (
    <MapContainer center={center} zoom={18} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <ChangeMapView coords={center} />
      <Marker position={center}>
        <Popup>Center Warsaw</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapDisplay;
