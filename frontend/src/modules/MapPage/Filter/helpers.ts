import {District} from "api/apiModels";
import {RangeInputOutput} from 'design-system/components/RangeInput/RangeInput';

export const districtsListToName = ( districts: Array<District> ): Array<string> => {
    const result = districts.map((district) => district.name);
    result.push('Wszystkie');
    return result;
};

export const rangeQuery = ( value: RangeInputOutput, name: string ) => {
    if( !value )
        return  '';

    let { max, min } = value;
    console.log(value);
    if(!min)
        min = 0;
    if(max > 0)
        return `&${name}_between1=${min}&${name}_between2=${max}`;
    if(!max && min > 0)
        return `&${name}_mt=${min}`;

    return '';
};