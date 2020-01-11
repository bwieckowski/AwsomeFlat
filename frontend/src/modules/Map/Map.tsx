import React from 'react'
import {Map as LeafletMap, Marker, Popup, TileLayer} from 'react-leaflet';
import { icons } from './constants';

interface MapProps {
    className?: string;
}

class Map extends React.Component<MapProps> {
    render() {
        console.log(icons['apartment']);
        return (
            <LeafletMap
                className={this.props.className}
                center={[50.0646501, 19.944979]}
                zoom={12}
                maxZoom={16}
                minZoom={3}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
            >
                <TileLayer
                    url='https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
                />
                <Marker
                    position={[50.093131, 19.965100]}
                    icon={icons['room']}
                >
                    <Popup>
                        Popup for any custom information.
                    </Popup>
                </Marker>
            </LeafletMap>
        );
    }
}

export default Map