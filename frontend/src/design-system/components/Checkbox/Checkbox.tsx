import React, {useState} from 'react';
import * as P from 'design-system/components/Checkbox/parts';

interface CheckboxProps {
    className?: string,
    id?: string;
    label: string,
    onChange: ( isChecked: boolean, id?: string)=>void ,
}

const Checkbox: React.FC<CheckboxProps> = ( {className, id, label, onChange}) => {
    const [isChecked, setChecked] = useState(false);

    const toggleChecked = () => {
        setChecked(!isChecked);
        onChange(!isChecked, id);
    };

    return (
        <P.Wrapper onClick = {toggleChecked} className={className}>
            <P.Box><P.StyledChecked checked={isChecked}/></P.Box>
            <P.Label>{label}</P.Label>
        </P.Wrapper>
    );
};

export default Checkbox;
