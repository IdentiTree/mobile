import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./map.css"
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import React, { useState } from 'react';
import { useIonViewWillEnter, IonButton, IonLoading, IonToast } from '@ionic/react';

interface LocationError {
    showError: boolean;
    message?: string;
}

interface CenterPosition {
    latitude: number;
    longitude: number;
}

const Map: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<LocationError>({ showError: false });
    const [position, setPosition] = useState<Geoposition>();
    const [center, setCenter] = useState<CenterPosition>({ latitude: 52.51653424960838, longitude: 13.375682830810549 });


    const getLocation = async () => {

        console.log("load locpositionation")
        setLoading(true);

        try {
            const position = await Geolocation.getCurrentPosition();

            setCenter({ latitude: position.coords.latitude, longitude: position.coords.longitude });
            setLoading(false);
            console.log("position", position)
            console.log("center", center)
            setError({ showError: false });
        } catch (e) {
            setError({ showError: true, message: e.message });
            console.log("showError", e)
            setLoading(false);
        }
    }

    useIonViewWillEnter(() => {
        console.log("useIonViewWillEnter")
        getLocation()

    });
    return (
        <>
            <IonLoading
                isOpen={loading}
                onDidDismiss={() => setLoading(false)}
                message={'Getting Location...'}
            />
            <IonToast
                isOpen={error.showError}
                onDidDismiss={() => setError({ message: "", showError: false })}
                message={error.message}
                duration={3000}
            />

            {loading ? (
                <p>loading</p>
            ) : (
                <MapContainer
                    id="mapId"
                    className="markercluster-map"
                    center={[center.latitude, center.longitude]}
                    zoom={18}
                    maxZoom={18}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                </MapContainer>
            )}


        </>
    );
};
export default Map