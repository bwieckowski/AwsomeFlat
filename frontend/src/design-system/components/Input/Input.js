import React, {useState} from 'react';
import PropTypes from 'prop-types';
import * as P from './parts';

const Input = ({ placeholder, type, initValue, unit, movingPlaceholder, className, onChange }) => {

    const itHasNoEmptyValue = ( value ) => !!value;
    const [ clicked, setClicked ] = useState(itHasNoEmptyValue(initValue));
    const [value, setValue] = useState(initValue);

    const changeHandler = (event) => {
        onChange(event);
        setValue(event.target.value);
    };

    return (
        <P.StyledWrapper className={className}>
            <P.StyledContainer>
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

Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    initValue: PropTypes.any,
    unit: PropTypes.string,
    movingPlaceholder: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

export default Input;