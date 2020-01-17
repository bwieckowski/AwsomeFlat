import { Flat } from "api/apiModels";
import {AxiosError} from "axios";


export enum MapPageActionTypes {
    GetFlatsRequest = 'MapPage/GetFlatsRequest',
    GetFlatsSuccess = 'MapPage/GetFlatsSuccess',
    GetFlatsFailed = 'MapPage/GetFlatsFailed',
}

export interface GetFlatsParameters {

}

export type MapPageActions = {
    type: MapPageActionTypes.GetFlatsRequest;
    parameters: GetFlatsParameters;
} | {
    type: MapPageActionTypes.GetFlatsSuccess;
    flats: Array<Flat>;
} | {
    type: MapPageActionTypes.GetFlatsFailed
    error: AxiosError
};