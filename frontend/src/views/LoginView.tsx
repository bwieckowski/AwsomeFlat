import React from "react";
import {Login} from "../modules/Login/Login";
import * as P from './parts';

const LoginView = () => {
    return(
        <P.StyledFormWrapper>
            <Login />
        </P.StyledFormWrapper>
    )
};

export default LoginView;