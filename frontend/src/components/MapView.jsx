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

const VENUE_POSITION = [16.09353025994651, 108.14466603632266]

const locations = [
  {
    id: 1,
    name: "Wedding Venue",
    description: "this upmarket resort on 13-hectare grounds with a Japanese garden is a 3-minute walk from a beach along the South China Sea.",
    position: [16.09353025994651, 108.14466603632266],
  },
]

function MapView() {
  return (
    <MapContainer
      center={VENUE_POSITION}
      zoom={15}
      scrollWheelZoom={false}
      className="travel-map"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={VENUE_POSITION}>
        <Popup>
          <div className="map-popup-content">
            <h3>Mikazuki Resort &amp; Spa</h3>
            <p>
              Nguyễn Tất Thành, Hải Vân, Đà Nẵng 55000,
              Vietnam
            </p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapView