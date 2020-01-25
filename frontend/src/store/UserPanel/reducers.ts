import {UserPanelActions, UserPanelActionTypes, UserPanelState} from "./constants";
import {UserInfoActions, UserInfoActionTypes} from "../UserInfo/constants";

const userPanelReducer = (state: UserPanelState = {}, action: UserPanelActions | UserInfoActions ): UserPanelState=> {
        switch (action.type) {
            case UserPanelActionTypes.GetFlatsSuccess:
                const {facilities, types} = action.payload;
                 return {
                    ...state,
                    addOffer: {
                        facilities: facilities,
                        types: types,
                    }
                };
            case UserPanelActionTypes.GetUserFlatsSuccess:
                return {
                    ...state,
                    userFlats: action.payload,
                };
            case UserInfoActionTypes.UserLogoutSuccess:
                return {};
            default:
               return state
        }
};


export default userPanelReducer;