import {FilterActions, FilterActionTypes} from "./constants";
import {FilterState} from "api/apiModels";

const filterReducer = (state: FilterState = {}, action: FilterActions ): FilterState => {
    switch (action.type) {
        case FilterActionTypes.GetFilterSuccess:
            return {
                ...action.filter,
            };
        default:
            return state;
    }
};

export default filterReducer;