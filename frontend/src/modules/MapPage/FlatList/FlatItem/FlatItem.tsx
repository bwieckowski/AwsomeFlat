import React from 'react';
import * as P from 'modules/MapPage/FlatList/FlatItem/parts';
import {FlatBasic} from "api/apiModels";


const FlatItem: React.FC<FlatBasic> = ({
    title,
    price,
    area,
    type,
    miniPhoto
}) =>(
    <P.Wrapper>
        <P.ImageWrapper>
            <P.Image src={miniPhoto} alt={"pokoj"} />
        </P.ImageWrapper>
        <P.InfoWrapper>
            <P.HeaderWrapper>
                <P.Title>{ title }</P.Title>
                <P.SubTitle>
                    <P.Type>{type}</P.Type>
                    <P.P>Pokaż na mapie</P.P>
                </P.SubTitle>
            </P.HeaderWrapper>
            <P.ParametersWrapper>
                <P.Parameter><P.StyledMoney />{price} zł/ msc</P.Parameter>
                <P.Parameter><P.StyledRuler />{area} m<sup>2</sup></P.Parameter>
            </P.ParametersWrapper>
        </P.InfoWrapper>
    </P.Wrapper>
);

export default FlatItem;