import {UserInfoActionTypes} from "./constants";
import {BasicUser } from "api/apiModels";

export const createUserLoginSuccess = (user: BasicUser, jwt: string) => ({
    type: UserInfoActionTypes.UserLoginSuccess,
    user: user,
    jwt: jwt,
});


export const createUserLogoutSuccess = () => ({
    type:UserInfoActionTypes.UserLogoutSuccess,
});
