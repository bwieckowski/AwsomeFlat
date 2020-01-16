export interface Price {
   id: number;
   price: number;
   areMediaIncluded: boolean;
   commission: number
}

export interface FlatBasic {
    id: number;
    title: string;
    miniPhoto: string;
    type: string;
    price: Price;
    area: number;
}

export interface TransformedFlatBasic {
    id: number;
    title: string;
    miniPhoto: string;
    type: string;
    price: number;
    area: number;
}