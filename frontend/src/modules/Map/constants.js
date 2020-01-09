import {Icon, Point} from "leaflet";

const apartmentIcon = new Icon({
    iconUrl: require('assets/ApartmentsMarker.svg'),
    iconRetinaUrl: require('assets/ApartmentsMarker.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new Point(40, 50),
    className: 'leaflet-div-icon'
});

const roomIcon = new Icon({
    iconUrl: require('assets/RoomMarker.svg'),
    iconRetinaUrl: require('assets/RoomMarker.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new Point(40, 50),
    className: 'leaflet-div-icon'
});

const flatIcon = new Icon({
    iconUrl: require('assets/FlatMarker.svg'),
    iconRetinaUrl: require('assets/FlatMarker.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new Point(40, 50),
    className: 'leaflet-div-icon'
});

const garageIcon = new Icon({
    iconUrl: require('assets/GarageMarker.svg'),
    iconRetinaUrl: require('assets/GarageMarker.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new Point(40, 50),
    className: 'leaflet-div-icon'
});

export const icons = [
    apartmentIcon,
    roomIcon,
    flatIcon,
    garageIcon,
];