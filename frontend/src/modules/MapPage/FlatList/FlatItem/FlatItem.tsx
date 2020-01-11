import React from 'react';
import * as P from 'modules/MapPage/FlatList/FlatItem/parts';

interface FlatItem {
    title: string;
    price: number;
    area: number;
    img: string;
}

const FlatItem: React.FC<FlatItem> = ({
    title,
    price,
    area,
    img
}) =>(
    <P.Wrapper>
        <P.ImageWrapper>
            <P.Image src={img} alt={"pokoj"} />
        </P.ImageWrapper>
        <P.InfoWrapper>
            <P.HeaderWrapper>
                { title }
            </P.HeaderWrapper>
            <P.ParametersWrapper>
                <P.Parameter>{price}</P.Parameter>
                <P.Parameter>{area}</P.Parameter>
            </P.ParametersWrapper>
        </P.InfoWrapper>
    </P.Wrapper>
);

export default FlatItem;