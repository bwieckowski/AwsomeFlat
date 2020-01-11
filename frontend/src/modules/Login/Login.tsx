import React from "react";
import * as P from './parts';

export const Login = () => {
    return (
        <P.Wrapper>
            <P.FormWrapper>
                <P.Header>
                    Logowanie
                </P.Header>
                <P.InputsWrapper>
                    <P.LoginInput placeholder={"Twój email"} />
                    <P.LoginInput placeholder={"hasło"} type={'password'} />
                    <P.StyledButton >Zaloguj</P.StyledButton>
                </P.InputsWrapper>
            </P.FormWrapper>
        </P.Wrapper>
    )
};
