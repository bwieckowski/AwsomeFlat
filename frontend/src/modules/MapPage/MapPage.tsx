import React, {useEffect, useState} from 'react';
import * as P from 'modules/MapPage/parts';
import {Flat, FlatBasic } from "api/apiModels";
import axios from "axios";
import {connect, useDispatch} from "react-redux";
import {StoreState} from "store/constants";
import {getMapPlaces, transformArrayFlats} from "./helpers";
import {createGetFlatsSuccessAction} from "store/MapPage/actions";
import {url} from "../../api/config";
import Modal from "../Modal/Modal";

interface MapPageProps {
    flats?: Array<Flat>;
}



const MapPage: React.FC<MapPageProps> = ({ flats }) =>{

    const [flatToOpen, setFlatToOpen] = useState<Flat>();
    const [modalIsOpen, setOpenModal] = useState<boolean>(false);
    const dispatch = useDispatch();

    const openModal = ( id: number ) => {
        const flat = flats && flats.filter((item) => item.id === id);
        if(flat && flat[0]) {
            setFlatToOpen(flat[0]);
            setOpenModal(true);
        }
    };

    const closeModal = () =>{
        setOpenModal(false);
        console.log("dupa")
    };


    useEffect(() =>{
        axios.get<Array<FlatBasic>>(`http://${url}/basicAdvertisements`).then((resp) => {
            console.log(resp.data);
            dispatch(createGetFlatsSuccessAction(resp.data));
        })
    }, [dispatch]);

    return(
        <P.Wrapper>
            {flatToOpen &&
            <P.ModalWrapper show={modalIsOpen}>
                <Modal {...flatToOpen} onClose={closeModal}> </Modal>
            </P.ModalWrapper>
            }
            <P.StyledFilter />
            {
                <P.StyledFlatList
                    onItemClick={openModal}
                    flats={transformArrayFlats(flats)}
                />
            }
            <P.StyledMap mapPlaces={getMapPlaces(flats)}/>
        </P.Wrapper>
    );
};

const mapStateToProps = ( state: StoreState ) => ({
    flats: state.mapPage && state.mapPage.flats,
});

export default connect(mapStateToProps)(MapPage);