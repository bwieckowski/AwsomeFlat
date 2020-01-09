import React from 'react';
import * as P from './parts';

const MapPage = () =>{

    return(
        <P.Wrapper>
            <P.StyledFilter />
            <P.StyledFlatList />
            <P.StyledMap/>
        </P.Wrapper>
    )
};

export default MapPage;