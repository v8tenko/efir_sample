import React from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import styles from "./map.module.css";

function Maps() {
    return (
        <YMaps width="100%">
            <Map width="100%" height="350px" defaultState={{ center: [59.942146, 30.367369], zoom: 15 }} >
                <Placemark defaultGeometry={[59.942146, 30.367369]} />
            </Map>
        </YMaps>
    )
}


export default Maps;