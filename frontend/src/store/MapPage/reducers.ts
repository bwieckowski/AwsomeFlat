import {MapPage } from "../constants";
import {MapPageActions, MapPageActionTypes} from "./constants";

export const mapPageReducer = ( state: MapPage = {}, action: MapPageActions ): MapPage => {
        switch (action.type) {
            case MapPageActionTypes.GetFlatsSuccess:
                return {
                    ...state,
                    flats: action.flats,
                };
            case MapPageActionTypes.GetFlatsFailed:
                return {
                    ...state,
                    error: action.error,
                };
            default:
               return state
        }
};