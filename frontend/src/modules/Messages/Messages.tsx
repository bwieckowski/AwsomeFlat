import React from 'react';
import * as P from './parts';
import {MessageType} from "./constants";


interface MessageProps {
    message: string;
    isShow: boolean;
    type?: MessageType;
    className?: string;

}

const Message: React.FC<MessageProps> = ({
message,
isShow,
className,
type = MessageType.Success,
 }) => {

    return (
        <P.Wrapper className={className} type={type} isShow={isShow}>
            {message}
        </P.Wrapper>
    );
}

export default Message;