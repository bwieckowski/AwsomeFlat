import React, { useState} from "react";
import * as P from './parts';
import axios, {AxiosError} from "axios";
import {sha256} from "js-sha256";
import {useHistory} from "react-router";

export interface LoginSuccess{
    jwt: string;
}

export const Login = () => {
    const history = useHistory();
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    const tryLogin = () =>{
        const params = new URLSearchParams();
        params.append('email', email);
        params.append('password', password);

        axios.post<LoginSuccess>('http://localhost:8080/authorize' , params)
            .then((response) => {
            console.log(response);
            localStorage.setItem("token", response.data.jwt);
            history.push('/userPanel');
        }).catch((e: AxiosError) => {
            e.response && console.log(e.response.data);
        });

        console.log(email);
        console.log(password);
    };


    return (
        <P.Wrapper>
            <P.FormWrapper>
                <P.Header>
                    Logowanie
                </P.Header>
                <P.InputsWrapper>
                    <P.LoginInput
                        onChange={setEmail}
                        placeholder={"Twój email"}
                    />
                    <P.LoginInput
                        onChange={(password: string )=>setPassword(sha256(password))}
                        placeholder={"hasło"}
                        type={'password'}
                    />
                    <P.StyledButton onClick={tryLogin}>Zaloguj</P.StyledButton>
                </P.InputsWrapper>
            </P.FormWrapper>
        </P.Wrapper>
    )
};
