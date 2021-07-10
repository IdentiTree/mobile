import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./map.css"

const Map: React.FC = () => {
    return (
        <MapContainer
            id="mapId"
            className="markercluster-map"
            center={[52.51653424960838, 13.375682830810549]}
            zoom={13}
            maxZoom={18}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
};
export default Map