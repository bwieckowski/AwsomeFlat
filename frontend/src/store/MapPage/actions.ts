import {GetFlatsParameters, MapPageActionTypes} from "./constants";
import {FlatBasic} from "api/apiModels";

export const createGetFlatsRequestAction = (parameters: GetFlatsParameters) => ({
    type:MapPageActionTypes.GetFlatsRequest,
    parameters: parameters
});


export const createGetFlatsSuccessAction = (flats: Array<FlatBasic>) => ({
    type:MapPageActionTypes.GetFlatsSuccess,
    flats
});