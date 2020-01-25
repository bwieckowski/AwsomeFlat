import React, {useState} from "react";
import * as P from './parts';
import axios, {AxiosError} from "axios";
import {sha256} from "js-sha256";
import {url} from "../../api/config";
import {isEmail, isEmpty, validateForm} from "../../helpers/validations";
import {MessageType} from "../Messages/constants";

export interface RegisterFormValidation{
    firstName: boolean;
    email: boolean;
    password: boolean;
    confirmPassword: boolean;
}

interface RegisterProps {
    showMessage?: (message: string, type: MessageType) => void;
}


const Register: React.FC<RegisterProps> = ({showMessage}) => {

    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [confirmPassword, setConfirmPassword ] = useState('');
    const [firstName, setFirstName ] = useState('');
    const [isFormValidate, setFormValidate] = useState<RegisterFormValidation>({ email: false, password: false, firstName: false, confirmPassword: false });

    const validationFirstName = ( value: string ) => {
        setFormValidate({
            ...isFormValidate,
            firstName: false,
        });
        if(isEmpty(value))
            return "Pole jest wymagane";
        setFormValidate({
            ...isFormValidate,
            firstName: true,
        });
        return '';
    };

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

    const validationConfirmPassword = ( value: string ) => {
        setFormValidate({
            ...isFormValidate,
            confirmPassword: false,
        });
        if(isEmpty(value))
            return "Pole jest wymagane";

        if(value !== password)
            return "Hasła nie pasują do siebie";

        setFormValidate({
            ...isFormValidate,
            confirmPassword: true,
        });
        return '';
    };



    const  onRegister = () =>{
        axios.post(`http://${url}/register` , JSON.stringify({
            email: email,
            firstName: firstName,
            password: sha256(password),
        })).then((response) => {
            console.log(response);
            setEmail('');
            setConfirmPassword('');
            setPassword('');
            setFirstName('');
            showMessage && showMessage(response.data.message, MessageType.Success);

        }).catch((e: AxiosError) => {
            if (e.response ) {
                console.log(e.response.data);
                showMessage && showMessage(e.response.data.message, MessageType.Error);
            }
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
                        validation={validationFirstName}
                        placeholder={"Imię"}
                    />
                    <P.RegisterInput
                        value={email}
                        onChange={setEmail}
                        validation={validationEmail}
                        placeholder={"Twój email"}
                    />
                    <P.RegisterInput
                        value={password}
                        onChange={(e) => {setPassword(e)}}
                        validation={validationPassword}
                        placeholder={"hasło"}
                        type={'password'}
                    />
                    <P.RegisterInput
                        value={confirmPassword}
                        onChange={(e) => {setConfirmPassword(e)}}
                        validation={validationConfirmPassword}
                        placeholder={"powtórz hasło"}
                        type={'password'}
                    />
                    <P.StyledButton disabled={!validateForm(isFormValidate)} onClick={onRegister} >Zarejestruj</P.StyledButton>
                </P.InputsWrapper>
            </P.FormWrapper>
        </P.Wrapper>
    )
};

export default Register;