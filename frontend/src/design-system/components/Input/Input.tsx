import React, {useRef, useState} from 'react';
import * as P from 'design-system/components/Input/parts';

interface InputProps {
    placeholder?: string;
    type?: string;
    initValue?: string | number;
    unit?: string;
    min?: number;
    value?: any;
    tips?: Array<string>
    movingPlaceholder?: boolean;
    onChange?: (value: any) => void;
    className?: string;
    onBlur?: ()=>void;
    validation?: (value : string ) => string;
    onTipClick?: (index: number) => void;
}

const Input: React.FC<InputProps> = ({
 placeholder,
 type,
 initValue,
 min,
 unit,
 value: initialValue,
 movingPlaceholder,
 className,
 tips = [],
 onBlur,
 validation,
 onTipClick,
 onChange }) => {

    const itHasNoEmptyValue = ( value: string | number | undefined ) => !!value;
    const [ clicked, setClicked ] = useState(itHasNoEmptyValue(initValue));
    const [currentValue,setValue] = useState(initialValue);
    const [showTips,setShowTips] = useState(true);
    const [ message, setMessages] = useState<string>('');

    const inputRef = useRef(null);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        setShowTips(true);
        onChange && onChange(event.target.value);
    };

    const labelClick = () =>{
        setClicked(true);
        if(inputRef && inputRef.current) {
            // @ts-ignore
            inputRef.current.focus();
        }
    };

    const onTipChoose = (tip: string, index: number) => {
        setShowTips(false);
        setValue(tip);
        onTipClick&&onTipClick(index);
    };

    return (
        <P.StyledWrapper>
            <P.StyledWrapper className={className}>
                <P.StyledContainer isUnit={(!!unit)} >
                    <P.StyledInput
                        defaultValue={currentValue}
                        type={type}
                        min={min&&min}
                        onChange={changeHandler}
                        ref={inputRef}
                        placeholder={ movingPlaceholder ? undefined : placeholder}
                        onFocus={()=>{setClicked(true)} }
                        onBlur={()=>{
                            setClicked(itHasNoEmptyValue(currentValue));
                            validation && setMessages(validation(currentValue));
                            onBlur&&onBlur();
                        }}
                    />
                    {movingPlaceholder && (<P.StyledLabel onClick={ labelClick } isClicked={clicked}>{placeholder}</P.StyledLabel>)}
                    <P.ErrorMessage>{message}</P.ErrorMessage>
                </P.StyledContainer>
                {tips &&(
                    <P.List show={showTips}>
                        {tips.map((tip, index) => (
                            <P.ListItem key={index} onClick={() => {onTipChoose(tip, index)}}>{tip}</P.ListItem>
                        ))}
                    </P.List>
                )}
            </P.StyledWrapper>
            { unit && (<P.UnitLabel>{ unit }</P.UnitLabel>) }
        </P.StyledWrapper>
    )
};

export default Input;