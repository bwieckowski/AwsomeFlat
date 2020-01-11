import React, {useState} from 'react';
import * as P from 'design-system/components/Checkbox/parts';

interface CheckboxProps {
    className?: string,
    label: string,
    onChange: ( isChecked: boolean)=>void ,
}

const Checkbox: React.FC<CheckboxProps> = ( {className, label, onChange}) => {
    const [isChecked, setChecked] = useState(false);

    const toggleChecked = () => {
        setChecked(!isChecked);
        onChange(!isChecked);
    };

    return (
        <P.Wrapper onClick = {toggleChecked} className={className}>
            <P.Box><P.StyledChecked isChecked={isChecked}/></P.Box>
            <P.Label>{label}</P.Label>
        </P.Wrapper>
    );
};

export default Checkbox;

Checkbox.defaultProps = {
    label: '',
    className: '',
    onChange: () => {},
};
