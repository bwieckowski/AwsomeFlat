import { Facility, FlatBasic, PropertyType, UserPanelAddOffer} from "api/apiModels";

export enum UserPanelActionTypes {
    GetFlatsSuccess = 'UserPanel/InitSuccess',
    GetUserFlatsSuccess = 'UserPanel/UserFlatsSuccess',
}

export interface AddOfferState {
    facilities?: Array<Facility>;
    types?: Array<PropertyType>;
}

export interface UserPanelState {
    addOffer?: AddOfferState;
    userFlats?: Array<FlatBasic>;
}

export type  UserPanelActions = {
    type: UserPanelActionTypes.GetFlatsSuccess
    payload: UserPanelAddOffer;
} | {
    type: UserPanelActionTypes.GetUserFlatsSuccess
    payload: Array<FlatBasic>;
}
