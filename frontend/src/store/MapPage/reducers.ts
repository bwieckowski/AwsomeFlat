import { MapPageActions, MapPageActionTypes } from "./constants";
import {Flat} from "api/apiModels";
import {combineReducers} from "redux";
import filterReducer from "./Filter/reducers";

const flatsReducer = (state: Array<Flat> = [], action: MapPageActions ): Array<Flat> => {
        switch (action.type) {
            case MapPageActionTypes.GetFlatsRequest:
                return [];
            case MapPageActionTypes.GetFlatsSuccess:
                return [
                    ...action.flats
                ];
            default:
               return state
        }
};


const centerOnFlat = (state: [number, number] = [50, 19], action: MapPageActions ): [number, number] => {
    switch (action.type) {
        case MapPageActionTypes.CenterMapOnCoords:
            return [
                action.coords[0],
                action.coords[1]
            ];
        default:
            return state
    }
};

export default combineReducers({
    flats: flatsReducer,
    filter: filterReducer,
    centeredFlat: centerOnFlat
});