import {Flat, MapPlace, TransformedFlatBasic} from "api/apiModels";

export const transformArrayFlats = ( flats?: Array<Flat> ): Array<TransformedFlatBasic> | undefined => {
    if(!flats)
        return undefined;

    return flats.map( ({ id, price, title, type, area, miniPhoto}) => {
        return {
            id: id,
            title: title,
            miniPhoto: miniPhoto,
            type: type,
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
            type: type,
        }
    });
};

