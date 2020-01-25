import React from 'react';
import * as P from 'modules/MapPage/FlatList/FlatItem/parts';
import {TransformedFlatBasic} from "../constants";
import {useDispatch} from "react-redux";
import {createCenterMapOnFlat} from "store/MapPage/actions";
import exampleImage from 'assets/apartment-mini.png';

interface FlatItemProps extends TransformedFlatBasic {
    className?: string;
    onItemClick?: (id : number) => void;
}

const FlatItem: React.FC<FlatItemProps> = ({
    title,
    price,
    id,
    area,
    type,
    // miniPhoto,
    localization,
   onItemClick,
    className,
}) =>{
    const dispatch = useDispatch();

    const centerTheMap = () => {
        dispatch(createCenterMapOnFlat(localization))
    };

    return(
    <P.Wrapper className={className}>
        <P.ImageWrapper>
            <P.Image
                onClick={()=>{onItemClick && onItemClick(id)}}
                src={exampleImage}
                alt={"pokoj"}
            />
            {/*<P.Image src={miniPhoto} alt={"pokoj"} />*/}
        </P.ImageWrapper>
        <P.InfoWrapper>
            <P.HeaderWrapper>
                <P.Title
                    title={title}
                    onClick={()=>{onItemClick && onItemClick(id)}}
                >
                    { title }
                </P.Title>
                <P.SubTitle>
                    <P.TypeWrapper>
                        { P.icons[type.enum]}
                        <P.Type>{type.name}</P.Type>
                    </P.TypeWrapper>
                    <P.P onClick = {centerTheMap}>Pokaż na mapie</P.P>
                </P.SubTitle>
            </P.HeaderWrapper>
            <P.ParametersWrapper>
                <P.Parameter><P.StyledMoney />{price} zł/ msc</P.Parameter>
                <P.Parameter><P.StyledRuler />{area} m<sup>2</sup></P.Parameter>
            </P.ParametersWrapper>
        </P.InfoWrapper>
    </P.Wrapper>
)};

export default FlatItem;