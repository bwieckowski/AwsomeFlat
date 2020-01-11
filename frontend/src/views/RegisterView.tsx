import React from "react";
import {Register} from "../modules/Register/Register";
import * as P from './parts';

const RegisterView = () => {
    return(
        <P.StyledFormWrapper>
            <Register />
        </P.StyledFormWrapper>
    )
};

export default RegisterView;