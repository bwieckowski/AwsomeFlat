import React, { useState } from 'react';
import * as P from './parts';
import { ReactComponent as Arrow} from 'assets/arrow.svg';

interface DropdownProps {
    optionList: Array<string>;
    onChange?: (value: string, index?: number) => void;
    className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({optionList, onChange, className}) => {

    const [ current, setCurrent ] = useState<string>( optionList[0] );
    const [ isOpen, setOpen ] = useState(false);

    const toggleList = () => {
        setOpen( !isOpen );
    };

    const onChangeItem = ( name: string, index: number ) => {
        setCurrent( name );
        onChange && onChange(name, index );
        setOpen(false);
    };

    return (
     <P.Wrapper className={className}>
         <P.Container  onClick={toggleList}>
             <P.Selected>{current ? current : optionList[0]}</P.Selected>
             <P.Button>
                 <P.RotateContainer isOpen={isOpen} >
                     <Arrow />
                 </P.RotateContainer>
             </P.Button>
         </P.Container>
         <P.List isOpen={isOpen}>
             { optionList && optionList.length && optionList.map((item, key)=>(
                 <P.ListItem key={key} onClick={() => onChangeItem(item, key)}>{item}</P.ListItem>
             ))}
         </P.List>
     </P.Wrapper>
    )
};

export default Dropdown;