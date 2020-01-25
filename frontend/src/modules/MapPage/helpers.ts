import {Flat } from "api/apiModels";
import {TransformedFlatBasic} from "./FlatList/constants";
import {MapPlace} from "./Map/constants";

export const transformArrayFlats = ( flats?: Array<Flat> ): Array<TransformedFlatBasic> | undefined => {
    if(!flats)
        return undefined;

    return flats.map( ({ id, price, title, type, area, localization, miniPhoto}) => {
        return {
            id: id,
            title: title,
            miniPhoto: miniPhoto,
            type: type,
            localization: [parseFloat(localization.latitude), parseFloat(localization.longitude)],
            price: price.price,
            area: area,
        }
    });
};

export const getMapPlaces = ( flats?: Array<Flat> ): Array<MapPlace> | undefined => {
    if(!flats)
        return undefined;

    return flats.map( ({ type, localization}) => {
        return {
            latitude: localization.latitude,
            longitude: localization.longitude,
            type: type.enum,
        }
    });
};

