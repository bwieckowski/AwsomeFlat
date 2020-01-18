import {GetFlatsParameters } from "../constants";
import {AxiosError} from "axios";

export enum FilterActionTypes {
    GetFilterRequest = 'MapPage/GetFilterRequest',
    GetFilterSuccess = 'MapPage/GetFilterSuccess',
    GetFilterFailed = 'MapPage/GetFilterFailed',
}

export type  FilterActions = {
    type: FilterActionTypes.GetFilterRequest;
} | {
    type: FilterActionTypes.GetFilterSuccess;
    filter: GetFlatsParameters;
} | {
    type: FilterActionTypes.GetFilterFailed;
    error: AxiosError
};