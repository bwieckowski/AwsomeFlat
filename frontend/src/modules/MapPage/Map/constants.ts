import {BaseIconOptions, icon, Icon, Point} from "leaflet";

const commonOptions: BaseIconOptions = {
    iconSize: new Point(40, 50),
    className: 'leaflet-div-icon'
};

const apartmentIcon = icon({
    iconUrl: require('assets/ApartmentsMarker.svg'),
    iconRetinaUrl: require('assets/ApartmentsMarker.svg'),
    ...commonOptions,
});

const roomIcon = icon({
    iconUrl: require('assets/RoomMarker.svg'),
    iconRetinaUrl: require('assets/RoomMarker.svg'),
    ...commonOptions
});

const flatIcon = icon({
    iconUrl: require('assets/FlatMarker.svg'),
    iconRetinaUrl: require('assets/FlatMarker.svg'),
    ...commonOptions
});

export const garageIcon = icon({
    iconUrl: require('assets/GarageMarker.svg'),
    iconRetinaUrl: require('assets/GarageMarker.svg'),
    ...commonOptions
});

interface Icons {
    [key: string] : Icon
}

export const icons: Icons = {
    apartment: apartmentIcon,
    room: roomIcon,
    flat: flatIcon,
    garage: garageIcon,
};