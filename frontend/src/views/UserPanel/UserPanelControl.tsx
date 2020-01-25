import React, {useEffect} from "react";
import axios from "axios";
import {RouteComponentProps, useHistory} from "react-router";
import * as P from './parts';
import {useDispatch} from "react-redux";
import {initUserPanelSuccess} from "../../store/UserPanel/actions";
import {url} from "../../api/config";
import {createUserLoginSuccess, createUserLogoutSuccess} from "../../store/UserInfo/actions";

interface UserPanelControlProps extends Partial<RouteComponentProps>{
    className?: string;
}

const UserPanelControl: React.FC<UserPanelControlProps> = ({children, className, location}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('checking...');
        const jwt = localStorage.getItem('token');
        const params = new URLSearchParams();
        jwt ? params.append('jwt', jwt) : history.push('/');
        jwt && axios.post(`http://${url}/userPanel`, params )
            .then((response) => {
                const {user, ...restUserPanel} = response.data;
                dispatch( initUserPanelSuccess(restUserPanel));
                dispatch( createUserLoginSuccess(user, jwt));
            })
            .catch((error) => {
                localStorage.removeItem('token');
                dispatch( createUserLogoutSuccess());
                history.push('/');
            })
    },[location]);

    return (
        <P.EmptyWrapper className={className}>
            {children}
        </P.EmptyWrapper>
    )
};

export default UserPanelControl;