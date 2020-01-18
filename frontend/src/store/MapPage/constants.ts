import { Flat } from "api/apiModels";
import {AxiosError} from "axios";
import {FilterState} from "api/apiModels";

export enum MapPageActionTypes {
    GetFlatsRequest = 'MapPage/GetFlatsRequest',
    GetFlatsSuccess = 'MapPage/GetFlatsSuccess',
    GetFlatsFailed = 'MapPage/GetFlatsFailed',
}

export interface GetFlatsParameters {

}

export interface MapPageState {
    flats?: Array<Flat>;
    filter?: FilterState;
    error?: AxiosError;
}

export type  MapPageActions = {
    type: MapPageActionTypes.GetFlatsRequest;
    parameters: GetFlatsParameters;
} | {
    type: MapPageActionTypes.GetFlatsSuccess;
    flats: Array<Flat>;
} | {
    type: MapPageActionTypes.GetFlatsFailed
    error: AxiosError
};
