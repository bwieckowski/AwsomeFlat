import React, {useState} from 'react';
import PropTypes from 'prop-types';
import * as P from './parts'

const Toggle = ({onChange, initialState, className}) => {
    const [state, setState] = useState( initialState );
    const toggle = () => {
        const tmpState = !state;
        setState(tmpState);
        onChange(tmpState);
    };
    return (
        <P.Wrapper state={state} className={className} onClick={toggle}>
            <P.Dot state={state} />
        </P.Wrapper>
    )
};

Toggle.defaultProps = {
    initialState: false,
    onChange: () => {},
};

Toggle.propTypes = {
    className: PropTypes.string,
    initialState: PropTypes.bool,
    onChange: PropTypes.func,
};


export default Toggle;