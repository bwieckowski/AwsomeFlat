import React from 'react';
import { TransformedFlatBasic } from "api/apiModels";
import * as P from './parts';

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