import React, {useState} from 'react';
import * as P from './parts';

interface RangeInputProps {
    type: string,
    initValueMax?: number,
    initValueMin?: number,
    unit?: string,
    onChange?: ( output: RangeInputOutput) => void,
    className?: string,
}

export interface RangeInputOutput{
    min: number
    max: number
}

const RangeInput: React.FC<RangeInputProps> = ({
    className,
    onChange,
    unit = "zł",
    initValueMax = 0,
    initValueMin = 0
}) => {

    const [valueMin, setMinValue] = useState<number>(initValueMin);
    const [valueMax, setMaxValue] = useState<number>(initValueMax);

    const onChangeMinValue = () => {
        console.log(valueMin);
        if(  0 > valueMin  ) {
            setMinValue(0);
        }

        if( valueMin > valueMax && valueMax > 0 ) {
            setMinValue(valueMax);
        }
        onChange && onChange({ min: valueMin, max: valueMax});
    };

    const onChangeMaxValue = (  ) => {
        console.log(valueMax);
        if(  0 > valueMax  ) {
            setMaxValue(0);
        }

        if( valueMax < valueMin ) {
            setMaxValue(valueMin);
        }

        onChange && onChange({ min: valueMin, max: valueMax});
    };

    return (
        <P.StyledContainer className={className}>
            <P.MinInput
                placeholder={'od'}
                min={0}
                value={valueMin}
                movingPlaceholder={false}
                onChange={(e) => { setMinValue(parseInt(e));}}
                onBlur={onChangeMinValue}
                type={"number"}/>
            <P.MaxInput
                placeholder={'do'}
                min={0}
                value={valueMax}
                movingPlaceholder={false}
                onChange={(e) => { setMaxValue(parseInt(e)); }}
                onBlur={onChangeMaxValue}
                type={"number"}
                unit={unit}/>
        </P.StyledContainer>
    )
};

export default RangeInput;