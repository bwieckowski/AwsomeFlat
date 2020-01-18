import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as P from './parts';
import { ReactComponent as Arrow} from 'assets/arrow.svg';

interface DropdownProps {
    optionList: Array<string>;
    onChange?: (value: string) => void;
    className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({optionList, onChange, className}) => {
    const [ current, setCurrent ] = useState<string>( optionList[0] );
    const [ isOpen, setOpen ] = useState(false);

    const toggleList = () => {
        setOpen( !isOpen );
    };

    const onChangeItem = ( event: React.MouseEvent<HTMLElement,MouseEvent>  ) => {
        const target = event.target;
        if (target instanceof HTMLLIElement) {
            setCurrent( target.innerHTML );
            onChange && onChange(target.innerHTML);
            setOpen(false);
        }

    };

    return (
     <P.Wrapper className={className}>
         <P.Container  onClick={toggleList}>
             <P.Selected>{current}</P.Selected>
             <P.Button>
                 <P.RotateContainer isOpen={isOpen} >
                     <Arrow />
                 </P.RotateContainer>
             </P.Button>
         </P.Container>
         <P.List isOpen={isOpen}>
             { optionList && optionList.length && optionList.map((item, key)=>(
                 <P.ListItem key={key} onClick={onChangeItem}>{item}</P.ListItem>
             ))}
         </P.List>
     </P.Wrapper>
    )
};

Dropdown.defaultProps = {
    optionList: [],
    className: '',
    onChange: () => {},
};

Dropdown.propTypes = {
    className: PropTypes.string,
    optionList: PropTypes.array.isRequired,
    onChange: PropTypes.func,
};

export default Dropdown;