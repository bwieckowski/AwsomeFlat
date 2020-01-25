import {FlatBasic, UserPanelAddOffer} from "api/apiModels";
import {UserPanelActionTypes} from "./constants";

export const initUserPanelSuccess = (payloda: UserPanelAddOffer) => ({
    type: UserPanelActionTypes.GetFlatsSuccess,
    payload: payloda
});

export const createGetUserFlatsSuccess = (payload: Array<FlatBasic>) => ({
    type: UserPanelActionTypes.GetUserFlatsSuccess,
    payload,
});