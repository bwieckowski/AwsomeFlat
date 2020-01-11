import React from 'react';
import { FlatBasic } from "api/apiModels";
import FlatItem from "./FlatItem/FlatItem";
import * as P from './parts';

interface FlatListProps {
    flats: Array<FlatBasic>;
    className?: string;
}

const FlatList: React.FC<FlatListProps> = ({flats, className}) => (
    <P.Wrapper className={className}>
        {
            flats.map((flat, id) => (
                <FlatItem key={id} {...flat} />
            ))
        }
    </P.Wrapper>
);

export default FlatList;