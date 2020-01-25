export interface Price {
   id?: number;
   price: number;
   areMediaIncluded: boolean;
   commission: number
}

export interface Localization {
    id?: string
    longitude: string;
    latitude: string;
    street: string;
    flatNumber?: string;
    streetNumber: string;
    district: string;
    city: string;
    postalCode: string;
}

export interface PropertyType {
    id: string;
    name: string;
    enum: string;
}

export interface District {
    id: string;
    name: string;
}

export interface BasicUser {
    id: string;
    email: string;
    firstName: string;
}

export interface Facility {
    id: string;
    name: string;
}

export interface FilterState {
    cityName?: string;
    districts?: Array<District>;
    types?: Array<PropertyType>;
    facilities?: Array<Facility>;
}

export interface UserPanelAddOffer {
    facilities?: Array<Facility>;
    types?: Array<PropertyType>;
}

export interface UserLogin {
    user?: BasicUser;
    jwt?: string;
}

export interface PropertyType {
    id: string;
    name: string;
    enum: string;
}

export interface Flat {
    id: number;
    title: string
    localization: Localization;
    price: Price;
    type: PropertyType;
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