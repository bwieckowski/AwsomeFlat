import React, {useEffect} from "react";
import {RouteComponentProps, useHistory} from "react-router";

const Logout: React.FC<RouteComponentProps> = () => {
    const history = useHistory();

    useEffect(() => {
        localStorage.removeItem('token');
        history.push('/');
    },[]);

    return <></>
};

export default Logout;