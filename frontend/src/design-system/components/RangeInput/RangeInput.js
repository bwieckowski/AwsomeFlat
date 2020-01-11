import React, {useState} from 'react';
import PropTypes from 'prop-types';
import * as P from './parts';

const RangeInput = ({className, unit, initValueMax, initValueMin}) => {

    const [valueMin, setMinValue] = useState(initValueMin);
    const [valueMax, setMaxValue] = useState(initValueMax);

    const onChangeMinValue = ( event ) => {
        const currentValue = parseInt(event.target.value);
        if( currentValue > valueMax ) {
            setMinValue(valueMax);
            event.target.value = valueMax;
        }
        else {
            setMinValue(currentValue);
        }
    };

    const onChangeMaxValue = ( event ) => {
        const currentValue = parseInt(event.target.value);
        if( currentValue < valueMin ) {
            setMaxValue(valueMax);
            event.target.value = valueMax;
        }
        else {
            setMaxValue(currentValue);
        }
    };

    return (
        <P.StyledContainer className={className}>
            <P.MinInput
                placeholder={'od'}
                movingPlaceholder={false}
                onChange={onChangeMinValue}
                type={"number"}/>
            <P.MaxInput
                placeholder={'do'}
                movingPlaceholder={false}
                onChange={onChangeMaxValue}
                type={"number"}
                unit={unit}/>
        </P.StyledContainer>
    )
};

RangeInput.defaultProps = {
    initValueMax: '',
    initValueMin: '',
    movingPlaceholder: true,
    unit: 'zł',
    onChange: ()=>{},
};

RangeInput.propTypes = {
    type: PropTypes.string,
    initValueMax: PropTypes.any,
    initValueMin: PropTypes.any,
    unit: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

export default RangeInput;