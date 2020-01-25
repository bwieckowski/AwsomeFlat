import {StoreState} from "store/constants";
import { PropertyType} from "api/apiModels";

export const getFacilities = ( store: StoreState) => {
    if( !store.userPanel)
        return [];

    if(!store.userPanel.addOffer)
        return  [];

    return store.userPanel.addOffer.facilities;
};


export const getTypes = ( store: StoreState) => {
    if( !store.userPanel)
        return [];

    if(!store.userPanel.addOffer)
        return  [];

    return store.userPanel.addOffer.types;
};

export const typesListToName = ( typeList: Array<PropertyType> ): Array<string> =>
    typeList.map((type) => type.name);

export const getIdfromNameType = ( typeList: Array<PropertyType>, name: string ): string =>
    typeList.filter((item) => item.enum === name)[0].enum;

export const transformAddressResponseToTips = ( transformedData: Array<any> ): Array<any> =>
    transformedData.map((item) => ({
            name: item.display_name,
            localization: [parseFloat(item.lat), parseFloat(item.lon)],
        }
    ));

export const transformTipsToList = ( transformedData: Array<any> ): Array<string> =>
    transformedData.map((item) =>  item.name );

