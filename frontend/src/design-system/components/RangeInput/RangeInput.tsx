import React, {useState} from 'react';
import * as P from './parts';


interface RangeInputProps {
    type: string,
    initValueMax?: number,
    initValueMin?: number,
    unit?: string,
    onChange?: () => void,
    className?: string,
}

const RangeInput: React.FC<RangeInputProps> = ({
    className,
    unit = "zł",
    initValueMax = 10,
    initValueMin = 0
}) => {

    const [valueMin, setMinValue] = useState<number>(initValueMin);
    const [valueMax, setMaxValue] = useState<number>(initValueMax);

    const onChangeMinValue = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const currentValue = parseInt(event.target.value);
        if( currentValue > valueMax ) {
            setMinValue(valueMax);
            event.target.value = valueMax.toString();
        }
        else {
            setMinValue(currentValue);
        }
    };

    const onChangeMaxValue = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const currentValue = parseInt(event.target.value);
        if( currentValue < valueMin ) {
            setMaxValue(valueMax);
            event.target.value = valueMax.toString();
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

export default RangeInput;