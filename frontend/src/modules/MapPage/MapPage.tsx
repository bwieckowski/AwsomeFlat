import React, {useEffect } from 'react';
import * as P from 'modules/MapPage/parts';
import {Flat, FlatBasic } from "../../api/apiModels";
import axios from "axios";
import {connect, useDispatch} from "react-redux";
import {StoreState} from "../../store/constants";
import {createGetFlatsSuccesstAction} from "../../store/MapPage/actions";
import {getMapPlaces, transformArrayFlats} from "./helpers";

interface MapPageProps {
    flats?: Array<Flat>;
}

const MapPage: React.FC<MapPageProps> = ({ flats }) =>{
    const dispatch = useDispatch();
    useEffect(() =>{
        axios.get<Array<FlatBasic>>('http://localhost:8080/basicAdvertisements').then((resp) => {
            dispatch(createGetFlatsSuccesstAction(resp.data));
        })
    }, []);

    return(
        <P.Wrapper>
            <P.StyledFilter />
            {
                <P.StyledFlatList flats={transformArrayFlats(flats)}/>
            }
            <P.StyledMap mapPlaces={getMapPlaces(flats)}/>
        </P.Wrapper>
    );
};

const mapStateToProps = ( state: StoreState ) => ({
    flats: state.mapPage && state.mapPage.flats,
});

export default connect(mapStateToProps,{})(MapPage);