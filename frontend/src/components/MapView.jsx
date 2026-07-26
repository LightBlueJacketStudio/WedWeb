import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet"

import L from "leaflet"
import "leaflet/dist/leaflet.css"

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

const locations = [
  {
    id: 1,
    name: "Da Nang International Airport",
    description: "Arrival airport for most international and domestic flights.",
    position: [16.0439, 108.1994],
  },
  {
    id: 2,
    name: "Wedding Venue",
    description: "this upmarket resort on 13-hectare grounds with a Japanese garden is a 3-minute walk from a beach along the South China Sea.",
    position: [16.09353025994651, 108.14466603632266],
  },
]

function MapView() {
  return (
    <div className="travel-map-wrapper">
      <MapContainer
        center={[16.0544, 108.2022]}
        zoom={12}
        scrollWheelZoom={false}
        className="travel-map"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.position}
          >
            <Popup>
              <div className="map-popup-content">
                <h3>{location.name}</h3>
                <p>{location.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default MapView