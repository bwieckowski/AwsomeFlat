import React from 'react';
import * as P from 'modules/MapPage/parts';
import {FlatBasic} from "../../api/apiModels";
import img from 'assets/apartment-mini.png'

const MapPage = () =>{
    const mockFlatList: Array<FlatBasic> = [
        {
            title: 'Super Studio dla studenta ',
            price: 23,
            area: 12,
            miniPhoto: img,
            type: 'Pokój',
        }
    ];

    return(
        <P.Wrapper>
            <P.StyledFilter />
            <P.StyledFlatList flats={mockFlatList} />
            <P.StyledMap/>
        </P.Wrapper>
    );
};

export default MapPage;