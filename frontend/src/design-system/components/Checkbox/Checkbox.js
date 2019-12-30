import React, {useState} from 'react';
import PropTypes from 'prop-types';
import * as P from './parts';

const Checkbox = ( {className, label, onChange}) => {
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

Checkbox.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
};
