import {PropertyType} from "api/apiModels";

export interface TransformedFlatBasic {
    id: number;
    title: string;
    miniPhoto: string;
    localization: [number, number];
    type: PropertyType;
    price: number;
    area: number;
}