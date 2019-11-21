import React, {useState} from 'react';
import PropTypes from 'prop-types';
import * as P from './parts';

const RangeInput = ({className, unit, initValueMax, initValueMin}) => {

    const [valueMin, setMinValue] = useState(initValueMin);
    const [valueMax, setMaxValue] = useState(initValueMax);

    const onChangeMinValue = ( event ) => {
        const currentValue = event.target.value;
        if( currentValue > valueMax ) {
            setMinValue(valueMax);
        }
        else {
            setMinValue(valueMax);
        }
        console.log(`min value ${currentValue > valueMax}`)
    };

    const onChangeMaxValue = ( event ) => {
        const currentValue = event.target.value;
        if( currentValue < valueMin ) {
            setMaxValue(valueMax);
        }
        else {
            setMaxValue(currentValue);
        }
        console.log('change max value')
    };

    return (
        <P.StyledContainer className={className}>
            <P.MinInput
                initValue={valueMin}
                placeholder={'od'}
                movingPlaceholder={false}
                onChange={onChangeMinValue}
                type={"number"}/>
            <P.MaxInput
                initValue={valueMax}
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
    onChange: ()=>{},
};

RangeInput.propTypes = {
    type: PropTypes.string,
    initValueMax: PropTypes.any,
    initValueMin: PropTypes.any,
    unit: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
};

export default RangeInput;