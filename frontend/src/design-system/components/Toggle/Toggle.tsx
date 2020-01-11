import React, {useState} from 'react';
import * as P from './parts'


interface ToggleProps {
    className?: string,
    initialState?: boolean,
    onChange?: ( result: boolean) => void,
}

const Toggle: React.FC<ToggleProps> = ({
onChange,
initialState = false,
className
}) => {
    const [state, setState] = useState<boolean>( initialState );
    const toggle = () => {
        const tmpState = !state;
        setState(tmpState);
        onChange && onChange(tmpState);
    };
    return (
        <P.Wrapper state={state} className={className} onClick={toggle}>
            <P.Dot state={state} />
        </P.Wrapper>
    )
};


export default Toggle;