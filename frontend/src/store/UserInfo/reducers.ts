import {UserInfoActions, UserInfoActionTypes, UserInfoState} from "./constants";


const userInfoReducer = (state: UserInfoState = {}, action: UserInfoActions ): UserInfoState => {
        switch (action.type) {
            case UserInfoActionTypes.UserLogoutSuccess:
                return {};
            case UserInfoActionTypes.UserLoginSuccess:
                return {
                    user: action.user,
                    jwt: action.jwt,
                };
            default:
               return state
        }
};

export default userInfoReducer;