import React, {useEffect, useState} from 'react';
import * as P from 'modules/MapPage/parts';
import {FlatBasic, TransformedFlatBasic} from "../../api/apiModels";
import img from 'assets/apartment-mini.png';
import axios from "axios";

const MapPage = () =>{

    const[basicFlats, setBasicFlats] = useState<Array<TransformedFlatBasic>>([]);

    useEffect(() =>{
        axios.get<Array<FlatBasic>>('http://localhost:8080/basicAdvertisements').then((resp) => {
            const result: Array<TransformedFlatBasic> = resp.data.map( ({ id, price, title, type, area}) => {
                return {
                    id: id,
                    title: title,
                    miniPhoto: img,
                    type: type,
                    price: price.price,
                    area: area,
                }
            });
            setBasicFlats(result);
        })
    }, []);

    return(
        <P.Wrapper>
            <P.StyledFilter />
            {
                basicFlats && <P.StyledFlatList flats={basicFlats}/>
            }
            <P.StyledMap/>
        </P.Wrapper>
    );
};

export default MapPage;