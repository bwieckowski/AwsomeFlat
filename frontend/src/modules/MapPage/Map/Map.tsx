import React from 'react'
import {Map as LeafletMap, Marker, TileLayer} from 'react-leaflet';
import {icons, MapPlace} from './constants';

interface MapProps {
    className?: string;
    mapPlaces?: Array<MapPlace>;
    currentCityLocation?: Location;
}

const Map: React.FC<MapProps> = ({mapPlaces, className}) =>{

        return (
            <LeafletMap
                className={className}
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
                {
                    mapPlaces && mapPlaces.map((item, index) =>(
                        <Marker
                            key={index}
                            position={[parseFloat(item.latitude), parseFloat(item.longitude)]}
                            icon={icons[item.type]}
                            onClick={() => { console.log(item)}}
                        />
                    ))
                }

            </LeafletMap>
        );
};


export default Map