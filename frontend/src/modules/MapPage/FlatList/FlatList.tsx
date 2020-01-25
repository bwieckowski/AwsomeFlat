import React from 'react';
import * as P from './parts';
import {TransformedFlatBasic} from "./constants";

interface FlatListProps {
    flats?: Array<TransformedFlatBasic>;
    className?: string;
    onItemClick?: (id : number) => void;
}

const FlatList: React.FC<FlatListProps> = ({flats, className, onItemClick}) => (
    <P.Wrapper className={className}>
        {
            flats && flats.map((flat, id) => (
                <P.StyledItemList key={id} {...flat}  onItemClick={onItemClick}/>
            ))
        }
    </P.Wrapper>
);

export default FlatList;