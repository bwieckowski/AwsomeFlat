import {StoreState} from "store/constants";

export const getFirstName = ( store: StoreState) => {

    const {userInfo} = store;
    console.log(store);

    if(!userInfo)
        return '';

    if(!userInfo.user )
        return '';

    return userInfo.user.firstName;
};