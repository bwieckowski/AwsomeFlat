import { combineReducers } from 'redux'
import {default as mapPage } from "./MapPage/reducers";
import {default as userPanel } from "./UserPanel/reducers";
import {default as userInfo} from "./UserInfo/reducers";


export default combineReducers({
    mapPage,
    userPanel,
    userInfo
})