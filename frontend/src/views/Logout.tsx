import React, {useEffect} from "react";
import {RouteComponentProps, useHistory} from "react-router";
import {createUserLogoutSuccess} from "../store/UserInfo/actions";
import {useDispatch} from "react-redux";

const Logout: React.FC<RouteComponentProps> = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.removeItem('token');
        dispatch(createUserLogoutSuccess());
        history.push('/');
    },[history]);

    return <></>
};

export default Logout;