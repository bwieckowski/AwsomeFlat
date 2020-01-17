export interface Price {
   id: number;
   price: number;
   areMediaIncluded: boolean;
   commission: number
}

export interface Localization{
    id: string
    longitude: string;
    latitude: string;
    street: string;
    flatNumber: string;
    streetNumber: string;
    district: string;
    city: string;
    postalCode: string;
}

export interface Flat {
    id: number;
    title: string
    localization: Localization;
    price: Price;
    type: string;
    area: number;
    miniPhoto: string;

}

export interface FlatBasic {
    id: number;
    title: string;
    miniPhoto: string;
    type: string;
    price: Price;
    area: number;
}
export interface Interface {
    
}

export interface MapPlace {
    type: string;
    latitude: string;
    longitude: string;
}

export interface TransformedFlatBasic {
    id: number;
    title: string;
    miniPhoto: string;
    type: string;
    price: number;
    area: number;
}