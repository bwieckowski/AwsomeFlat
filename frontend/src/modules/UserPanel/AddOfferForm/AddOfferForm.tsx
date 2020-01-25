import React, {useRef, useState} from "react";
import * as P from './parts';
import FormSection from "./FormSection";
import {Dropdown} from "design-system/components";
import {connect} from "react-redux";
import {StoreState} from "store/constants";
import xor from 'lodash/xor';
import debounce from 'lodash/debounce';
import {AddOfferState} from "store/UserPanel/constants";
import {
    getFacilities,
    getTypes,
    transformAddressResponseToTips,
    transformTipsToList,
    typesListToName
} from "./helper";
import axios from "axios";
import {Facility, Localization, Price} from "api/apiModels";
import { LoginSuccess} from "../../Login/Login";
import {url} from "api/config";
import {isEmpty, validateForm} from "../../../helpers/validations";
import {useHistory} from "react-router";

interface AddOfferFormProps extends AddOfferState {}

interface addressTip {
    name: string,
    localization: [number, number];
}

export interface AddOfferFormValidation {
    title: boolean;
    localization: boolean;
    price: boolean;
    commission: boolean;
    area: boolean;
}


const AddOfferForm:React.FC<AddOfferFormProps> = ({
facilities,
types,
}) => {

    const [ addresses, setAddresses ] = useState<Array<addressTip>>([]);
    const [ currentAddress, setCurrentAddress ] = useState<any>();
    const [ title, setTitle ] = useState<string>('');
    const [ currentPrice, setCurrentPrice ] = useState<number>(0);
    const [ currentCommission, setCurrentCommission ] = useState<number>(0);
    const [ area, setArea ] = useState<number>(0);
    const [ chosenFacilities, setFacilities ] = useState<Array<Facility>>([]);
    const [ currentFlatType, setCurrentFlatType ] = useState<string>('apartment');
    const [isFormValidate, setFormValidate] = useState<AddOfferFormValidation>({
        title: false,
        localization: false,
        price: false,
        area: false,
        commission: true,
    });

    const onReset = () => {

    };

    const onAddressTyping = ( address: string ) => {
        setFormValidate({
            ...isFormValidate,
            localization: false,
        });
        const path = `https://nominatim.openstreetmap.org/search?format=json&q=${address}`;
        axios.get<any>(encodeURI(path).toString())
            .then<any,any>((resp) => {
            if(resp && resp.data){
                const result: Array<any> = resp.data;
                setAddresses(transformAddressResponseToTips(result));
            }
        })
    };

    const tipClick = (index: number) => {
        const path = `https://nominatim.openstreetmap.org/reverse.php?format=json&lat=${addresses[index].localization[0]}&lon=${addresses[index].localization[1]}`;
        axios.get<any>(encodeURI(path).toString())
            .then<any,any>((resp) => {
                if(resp && resp.data){
                    const {address} = resp.data;
                    console.log(address);
                    const city = address.city ? address.city : address.town ? address.town : address.village ? address.village : '';
                    const district = address.city_district ? address.city_district : address.suburb ? address.suburb : address.hamlet ? city : city;
                    const mapPlace: Localization = {
                        latitude: addresses[index].localization[0].toString(),
                        longitude: addresses[index].localization[1].toString(),
                        street: address.road ? address.road : address.city,
                        streetNumber: address.house_number,
                        district,
                        city,
                        postalCode: address.postcode,
                    };
                    setCurrentAddress(mapPlace);
                    setFormValidate({
                        ...isFormValidate,
                        localization: true,
                    });
                }
            });
    };


    const bouncedDisplayAddresses = debounce((value) => { onAddressTyping(value)}, 500);

    const changeTypeOfFlat = ( name: string, index?: number) => {
        if(types && index !== undefined) {
         setCurrentFlatType(types[index].enum);
         console.log(types[index].enum)
        }
    };

    const validationTitle = ( value: string ) => {
        setFormValidate({
            ...isFormValidate,
            title: false,
        });
        if(isEmpty(value))
            return "Pole jest wymagane";
        setFormValidate({
            ...isFormValidate,
            title: true,
        });
        return '';
    };


    const validationPrice = ( value: string ) => {
        setFormValidate({
            ...isFormValidate,
            price: false,
        });
        if(isEmpty(value))
            return "Pole jest wymagane";
        if(parseFloat(value) < 1)
            return "Cena musi być większa niż 1";
        setFormValidate({
            ...isFormValidate,
            price: true,
        });
        return '';
    };

    const validationArea = ( value: string ) => {
        setFormValidate({
            ...isFormValidate,
            area: false,
        });
        if(isEmpty(value))
            return "Pole jest wymagane";
        if(parseFloat(value) < 1)
            return "Powierzchnia musi być większa niż 1";
        setFormValidate({
            ...isFormValidate,
            area: true,
        });
        return '';
    };

    const validationCommission = ( value: string ) => {
        setFormValidate({
            ...isFormValidate,
            commission: false,
        });

        if(parseFloat(value) < 1)
            return "Powierzchnia musi być większa niż 1";

        setFormValidate({
            ...isFormValidate,
            commission: true,
        });
        return '';
    };



    function onChangeTitle(value: string) {
        setTitle(value);
    }

    function onChangePrice(value: string) {
        setCurrentPrice(parseFloat(value));
    }

    function onChangeCommission(value: string) {
        setCurrentCommission(parseFloat(value));
    }

    function onChangeArea(value: string) {
        setArea(parseFloat(value));
    }
    const history = useHistory();
    function saveOffer() {
        const price: Price = {
            price: currentPrice,
            commission: currentCommission,
            areMediaIncluded: true,
        };
        const localization: Localization = {
            ...currentAddress
        };

        const advertisement: any = {
            area,
            title,
            price,
            localization,
            facilities: chosenFacilities,
            typeId: currentFlatType,
            jwt: localStorage.getItem('token'),
        };
        console.log(advertisement);



        axios.post<LoginSuccess>(`http://${url}/advertisements`, `advertisement=${JSON.stringify(advertisement)}` )
            .then((resp) => {
                console.log(resp);
                history.push('/userPanel/myOffers');
            });
    }

    return (
    <P.Wrapper>
        <P.Title>Nowa Oferta</P.Title>
        <form id={"addOffertForm"}>
        <P.TitleInputWrapper>
            <P.StyledInput
                placeholder={"Tytuł Oferty"}
                validation={validationTitle}
                onChange={onChangeTitle}
            />
            <P.InputWrapper>
            {
                types && <Dropdown
                    onChange={changeTypeOfFlat}
                    optionList={typesListToName(types)}
                />
            }
            </P.InputWrapper>
        </P.TitleInputWrapper>
        <P.SectionWrapper>
            <FormSection label={"Lokalizacja"}>
                <P.AddresInput
                    placeholder={"Adres"}
                    tips={transformTipsToList(addresses)}
                    onTipClick={tipClick}
                    onChange={bouncedDisplayAddresses}/>
                <P.StyledMap
                    mapPlaces={currentAddress && [{
                        latitude: currentAddress.latitude,
                        longitude: currentAddress.longitude,
                        type: currentFlatType,
                    }]}
                    center={currentAddress && [parseFloat(currentAddress.latitude),parseFloat(currentAddress.longitude) ]}
                />
            </FormSection>
            <FormSection label={"Podstawowe Informacje"}>
                <P.InputWrapper>
                    <P.StyledInput
                        type={"number"}
                        unit={"zł"}
                        validation={validationPrice}
                        onChange={onChangePrice}
                        placeholder={"Cena"}
                    />
                </P.InputWrapper>
                <P.InputWrapper>
                    <P.StyledInput
                        type={"number"}
                        unit={"zł"}
                        validation={validationCommission}
                        onChange={onChangeCommission}
                        placeholder={"Kaucja"}
                    />
                </P.InputWrapper>
                <P.InputWrapper>
                    <P.StyledInput
                        type={"number"}
                        unit={"m2"}
                        validation={validationArea}
                        onChange={onChangeArea}
                        placeholder={"Metraż"}
                    />
                </P.InputWrapper>
            </FormSection>
            {
                facilities && <FormSection label={"Udogodnienia"}>
                    {
                        facilities.map((facility, index) => (
                            <P.StyledCheckbox
                                key={index}
                                label={facility.name}
                                onChange={(isChecked) => {
                                    const newFacilities = xor(chosenFacilities, [facility]);
                                    setFacilities(newFacilities);
                                }}/>
                        ))
                    }
                </FormSection>
            }
            <P.StyledButton
                type={"button"}
                disabled={!validateForm(isFormValidate)}
                onClick={saveOffer}>Zapisz</P.StyledButton>
        </P.SectionWrapper>
        </form>
    </P.Wrapper>
)};

const mapStateToProps = ( state: StoreState ): AddOfferState => ({
    types: getTypes(state),
    facilities: getFacilities(state),
});

export default connect(mapStateToProps)(AddOfferForm);