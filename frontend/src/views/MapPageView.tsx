import React from 'react';
import MapPage from 'modules/MapPage';
import {RouteComponentProps} from "react-router";

const MapPageView: React.FC<RouteComponentProps> = ({match}) => {
    console.log(match);
    return (
        <>
            <MapPage/>
        </>

    )
};

export default MapPageView;