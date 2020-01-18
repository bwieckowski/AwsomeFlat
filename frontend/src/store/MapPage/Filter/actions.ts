import {FilterActionTypes} from "./constants";
import {FilterState} from "api/apiModels";

export const createGetFiltersSuccess = (filter: FilterState) => ({
    type: FilterActionTypes.GetFilterSuccess,
    filter
});




