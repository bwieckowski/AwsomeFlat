import React from 'react';
import * as P from './parts';
import {TransformedFlatBasic} from "./constants";

interface FlatListProps {
    flats?: Array<TransformedFlatBasic>;
    className?: string;
}

const FlatList: React.FC<FlatListProps> = ({flats, className}) => (
    <P.Wrapper className={className}>
        {
            flats && flats.map((flat, id) => (
                <P.StyledItemList key={id} {...flat} />
            ))
        }
    </P.Wrapper>
);

export default FlatList;