import React from 'react'
import {Map as LeafletMap, Marker, TileLayer} from 'react-leaflet';
import {icons, MapPlace} from './constants';
import {connect} from "react-redux";
import {StoreState} from "../../../store/constants";

interface MapProps {
    className?: string;
    mapPlaces?: Array<MapPlace>;
    center?: [number, number];
    currentCityLocation?: Location;
}

export const Map: React.FC<MapProps> = ({mapPlaces, center, className}) =>{

        return (
            <LeafletMap
                className={className}
                center={ center ? center : [50.0646501, 19.944979]}
                zoom={ center ? 16 : 12}
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

const mapStateToProps = ( state: StoreState) => ({
    center: state.mapPage&&state.mapPage.centeredFlat,
});

export default connect(mapStateToProps, {})(Map)