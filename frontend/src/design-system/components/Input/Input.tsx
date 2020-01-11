import React, {useState} from 'react';
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

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(event);
        setValue(event.target.value);
    };

    return (
        <P.StyledWrapper className={className}>
            <P.StyledContainer isUnit={(!!unit)} >
                <P.StyledInput
                    value={value}
                    type={type}
                    onChange={changeHandler}
                    placeholder={ movingPlaceholder ? undefined : placeholder}
                    onFocus={()=>{setClicked(true)} }
                    onBlur={()=>{setClicked(itHasNoEmptyValue(value))}}
                />
                {movingPlaceholder && (<P.StyledLabel isClicked={clicked}>{placeholder}</P.StyledLabel>)}
            </P.StyledContainer>
            { unit && (<P.UnitLabel>{ unit }</P.UnitLabel>) }
        </P.StyledWrapper>
    )
};
Input.defaultProps = {
    initValue: '',
    movingPlaceholder: true,
    onChange: ()=>{},
};


export default Input;