import React, {useEffect, useState} from "react";
import * as P from './parts';
import exampleImage from "../../assets/modal-header.png";
import FormSection from "../UserPanel/AddOfferForm/FormSection";
import {Facility, Flat} from "../../api/apiModels";
import {url} from "../../api/config";
import axios from "axios";

interface ModalProps extends Flat{
    onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({
    id,
    price,
    area,
    localization,
    onClose,
    ...restFlat
}) =>{
    const [ facilities, setFacilities] = useState<Array<Facility>>([]);

    useEffect(()=>{
        console.log(restFlat);
        id && axios.get<Array<Facility>>(`http://${url}/facilitiesByAdvertisementId?idCity=${id}`).then((resp) => {
            console.log(resp);
            if(resp.data)
                setFacilities(resp.data)
        })
    },[id]);

    const { price: amountPrice, commission } = price;
    const { streetNumber, city, postalCode, street } = localization;

    return (
        <P.Wrapper>
            <P.ModalContainer>
                <P.StyledDelete onClick={()=>{onClose && onClose() }}/>
                <P.Image
                    src={exampleImage}
                    alt={"pokoj"}
                />
                <P.DescriptionWrapper>
                    <P.StyledFormSection label={"Podstawowe Informacje"}>
                        <P.List>
                            {amountPrice && <P.ListItem>Cena: {amountPrice} zł</P.ListItem>}
                            {!!commission && <P.ListItem>Kaucja: {commission} zł</P.ListItem>}
                            {area && <P.ListItem>Metraż: {area} m<sup>2</sup></P.ListItem>}
                        </P.List>
                    </P.StyledFormSection>
                    {
                        !!facilities && !!facilities.length && <P.StyledFormSection label={"Udogodnienia"}>
                            <P.List>
                            {
                                facilities && facilities.map((item, index) => (
                                    <P.ListItem key={index}>{item.name}</P.ListItem>
                                ))
                            }
                            </P.List>
                        </P.StyledFormSection>
                    }
                    <P.StyledFormSection label={"Lokalizacja"}>
                        <P.List>
                            <P.ListItem>{street} {streetNumber}</P.ListItem>
                            <P.ListItem>{postalCode} {city}</P.ListItem>
                        </P.List>
                    </P.StyledFormSection>
                </P.DescriptionWrapper>
            </P.ModalContainer>
        </P.Wrapper>

    );
};

export default Modal;