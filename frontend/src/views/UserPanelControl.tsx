import React, {useEffect} from "react";
import axios from "axios";
import { useHistory} from "react-router";

const UserPanelControl: React.FC = ({children}) => {
    const history = useHistory();

    useEffect(() => {
        const jwt = localStorage.getItem('token');
        const params = new URLSearchParams();
        jwt ? params.append('jwt', jwt) : history.push('/');
        jwt && axios.post('http://localhost:8080/userPanel', params )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                history.push('/');
                console.log(error);
            })
    },[]);

    return (
        <>
            {children}
        </>
    )
};

export default UserPanelControl;