import React, {useState} from "react";
import Register from "../modules/Register/Register";
import * as P from './parts';
import {MessageType} from "../modules/Messages/constants";

const RegisterView = () => {

    const [message, setMessage] = useState<string>('');
    const [messageType, setMessageType] = useState<MessageType>();
    const [isShow, setShowMessage] = useState<boolean>(false);

    const showMessage = ( message: string, type: MessageType) => {
        setMessage(message);
        setMessageType(type);
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        },5000);
    };

    return(
        <P.StyledFormWrapper>
            <P.StyledMessage message={message} isShow={isShow} type={messageType}/>
            <Register showMessage={showMessage}/>
        </P.StyledFormWrapper>
    )
};

export default RegisterView;