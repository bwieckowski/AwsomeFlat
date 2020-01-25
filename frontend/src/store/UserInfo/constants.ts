import { Flat } from "api/apiModels";
import {BasicUser} from "api/apiModels";

export enum UserInfoActionTypes {
    UserLoginSuccess = 'UserInfo/UserLogin',
    UserLogoutSuccess = 'UserInfo/UserLogout',
}

export interface UserInfoState {
    user?: BasicUser;
    jwt?: string;
}

export type  UserInfoActions = {
    type: UserInfoActionTypes.UserLoginSuccess;
    user: BasicUser;
    jwt: string;
} | {
    type: UserInfoActionTypes.UserLogoutSuccess;
};