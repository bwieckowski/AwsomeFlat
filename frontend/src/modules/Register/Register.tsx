import React from "react";
import * as P from './parts';

export const Register = () => {
    return (
        <P.Wrapper>
            <P.FormWrapper>
                <P.Header>
                    Rejestracja
                </P.Header>
                <P.InputsWrapper>
                    <P.RegisterInput placeholder={"Imię"} />
                    <P.RegisterInput placeholder={"Twój email"} />
                    <P.RegisterInput placeholder={"powtórz hasło"} type={'password'} />
                    <P.RegisterInput placeholder={"hasło"} type={'password'} />
                    <P.StyledButton >Zarejestruj</P.StyledButton>
                </P.InputsWrapper>
            </P.FormWrapper>
        </P.Wrapper>
    )
};
