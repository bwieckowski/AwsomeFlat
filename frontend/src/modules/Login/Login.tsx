import React, { useState} from "react";
import * as P from './parts';
import axios, {AxiosError} from "axios";
import {sha256} from "js-sha256";
import {useHistory} from "react-router";
import {url} from "../../api/config";
import {isEmail, isEmpty, validateForm} from "../../helpers/validations";
import {bool} from "prop-types";
import {useDispatch} from "react-redux";
import {createUserLoginSuccess} from "../../store/UserInfo/actions";
import {BasicUser} from "../../api/apiModels";

export interface LoginSuccess{
    user: BasicUser;
    jwt: string;
}

export interface LoginFormValidation{
    email: boolean;
    password: boolean;
}

export const Login = () => {
    const history = useHistory();
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [apiResponse, setApiResponse ] = useState('');
    const [isFormValidate, setFormValidate] = useState<LoginFormValidation>({ email: false, password: false });

    const validationEmail = ( value: string ) => {
        setFormValidate({
            ...isFormValidate,
            email: false,
        });
        if(isEmpty(value))
            return "Pole jest wymagane";
        if(!isEmail(value))
            return "podaj poprawny email";
        setFormValidate({
            ...isFormValidate,
            email: true,
        });
        return '';
    };

    const validationPassword = ( value: string ) => {
        setFormValidate({
            ...isFormValidate,
            password: false,
        });
        if(isEmpty(value))
            return "Pole jest wymagane";
        setFormValidate({
            ...isFormValidate,
            password: true,
        });
        return '';
    };

    const dispatch = useDispatch();

    const tryLogin = () =>{
        const params = new URLSearchParams();
        params.append('email', email);
        params.append('password', password);

        axios.post<LoginSuccess>(`http://${url}/authorize` , params)
            .then((response) => {
                const {data} = response;
                localStorage.setItem("token", data.jwt);
                dispatch(createUserLoginSuccess(data.user, data.jwt));
                history.push('/userPanel/myOffers');
            }).catch((e: AxiosError) => {
                if (e.response ) {
                    console.log(e.response.data);
                    setApiResponse(e.response.data.message);
                }
            });
    };


    return (
        <P.Wrapper>
            <P.FormWrapper>
                <P.Header>
                    Logowanie
                </P.Header>
                <P.Message>{apiResponse}</P.Message>
                <P.InputsWrapper>
                    <P.LoginInput
                        onChange={setEmail}
                        validation={validationEmail}
                        placeholder={"Twój email"}
                    />
                    <P.LoginInput
                        onChange={(password: string )=>setPassword(sha256(password))}
                        placeholder={"hasło"}
                        validation={validationPassword}
                        type={'password'}
                    />
                    <P.StyledButton disabled={!validateForm(isFormValidate)} onClick={tryLogin}>Zaloguj</P.StyledButton>
                </P.InputsWrapper>
            </P.FormWrapper>
        </P.Wrapper>
    )
};
