import {MapPageState} from "./MapPage/constants";
import {UserPanelState} from "./UserPanel/constants";
import {UserInfoState} from "./UserInfo/constants";

export interface StoreState {
    mapPage?: MapPageState;
    userPanel?: UserPanelState;
    userInfo?: UserInfoState;
}