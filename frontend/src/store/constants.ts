import {Flat } from "../api/apiModels";
import {AxiosError} from "axios";

export interface MapPage {
    flats?: Array<Flat>;
    error?: AxiosError,
}

export interface StoreState {
    mapPage?: MapPage
}