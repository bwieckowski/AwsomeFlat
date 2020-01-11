import React, {useRef, useState} from 'react';
import * as P from 'design-system/components/Input/parts';

interface InputProps {
    placeholder?: string;
    type?: string;
    initValue?: string | number;
    unit?: string;
    movingPlaceholder?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, type, initValue, unit, movingPlaceholder, className, onChange }) => {

    const itHasNoEmptyValue = ( value: string | number | undefined ) => !!value;
    const [ clicked, setClicked ] = useState(itHasNoEmptyValue(initValue));

    const [value, setValue] = useState(initValue);
    const inputRef = useRef(null);

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event);
        setValue(event.target.value);
    };

    const labelClick = () =>{
        setClicked(true);
        if(inputRef && inputRef.current) {
            // @ts-ignore
            inputRef.current.focus();
        }
    };

    return (
        <>
            <P.StyledWrapper className={className}>
                <P.StyledContainer isUnit={(!!unit)} >
                    <P.StyledInput
                        value={value}
                        type={type}
                        onChange={changeHandler}
                        ref={inputRef}
                        placeholder={ movingPlaceholder ? undefined : placeholder}
                        onFocus={()=>{setClicked(true)} }
                        onBlur={()=>{setClicked(itHasNoEmptyValue(value))}}
                    />
                    {movingPlaceholder && (<P.StyledLabel onClick={ labelClick } isClicked={clicked}>{placeholder}</P.StyledLabel>)}
                </P.StyledContainer>
            </P.StyledWrapper>
            { unit && (<P.UnitLabel>{ unit }</P.UnitLabel>) }
        </>
    )
};
Input.defaultProps = {
    initValue: '',
    movingPlaceholder: true,
    onChange: ()=>{},
};


export default Input;