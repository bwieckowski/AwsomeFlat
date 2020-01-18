import React, {useState} from "react";
import * as P from './parts';
import axios, {AxiosError} from "axios";
import {sha256} from "js-sha256";

export const Register = () => {

    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [confirmPassword, setConfirmPassword ] = useState('');
    const [firstName, setFirstName ] = useState('');

    const  onRegister = () =>{
        axios.post('http://localhost:8080/register' , JSON.stringify({
            email: email,
            firstName: firstName,
            password: sha256(password),
        })).then((response) => {
            console.log(response);
            setEmail('');
            setConfirmPassword('');
            setPassword('');
            setFirstName('');

        }).catch((e: AxiosError) => {
            console.log(e.response);
        });

        console.log(email);
        console.log(password);
    };

    return (
        <P.Wrapper>
            <P.FormWrapper>
                <P.Header>
                    Rejestracja
                </P.Header>
                <P.InputsWrapper>
                    <P.RegisterInput
                        value={firstName}
                        onChange={setFirstName}
                        placeholder={"Imię"}
                    />
                    <P.RegisterInput
                        value={email}
                        onChange={setEmail}
                        placeholder={"Twój email"}
                    />
                    <P.RegisterInput
                        value={password}
                        onChange={(e) => {setPassword(e)}}
                        placeholder={"hasło"}
                        type={'password'}
                    />
                    <P.RegisterInput
                        value={confirmPassword}
                        onChange={(e) => {setConfirmPassword(e)}}
                        placeholder={"powtórz hasło"}
                        type={'password'}
                    />
                    <P.StyledButton onClick={onRegister} >Zarejestruj</P.StyledButton>
                </P.InputsWrapper>
            </P.FormWrapper>
        </P.Wrapper>
    )
};
