import React, {useState} from 'react';
import * as P from 'modules/MapPage/Filter/parts'
import axios from "axios";
import debounce from 'lodash/debounce'
import RangeInput, {RangeInputOutput} from "design-system/components/RangeInput/RangeInput";
import {ApartmentButton, FlatButton, GarageButton, RoomButton} from "design-system/components/Buttons/Buttons";
import {connect, useDispatch} from "react-redux";
import {FilterState, FlatBasic} from "api/apiModels";
import {StoreState} from "store/constants";
import {createGetFiltersSuccess} from "../../../store/MapPage/Filter/actions";
import {districtsListToName, rangeQuery} from "./helpers";
import {createGetFlatsSuccessAction} from "../../../store/MapPage/actions";

interface FilterOwnProps extends FilterState {
    className?: string;
}

type FilterProps =  FilterOwnProps;

const Filter: React.FC<FilterProps> = ({
    districts,
    cityName,
    className,
    facilities,
}) => {

    const [ selectedDistrict, selectDistrict ] = useState();
    const [ priceRange, setPriceRange ] = useState();
    const [ areaRange, setAreaRange ] = useState();

    const dispatch = useDispatch();

    const onTypeCity = (value: string) => {
        console.log(value);
        axios.get<FilterState>(`http://localhost:8080/filter?city=${value}`).then((resp) => {
            dispatch(createGetFiltersSuccess(resp.data));
        })
    };

    const onDistrictSelect = ( name: string ) => {
        selectDistrict(name);
        console.log(name);
    };

    const onPriceChange = ( value: RangeInputOutput) => {
        setPriceRange(value);
    };

    const onAreaChange = ( value: RangeInputOutput) => {
        setAreaRange(value);
    };

    const submitFilters = () => {
        const priceQuery = rangeQuery(priceRange, 'price');
        const areaQuery = rangeQuery(areaRange, 'area');
        console.log(priceQuery);
        const path = `http://localhost:8080/advertisements?${ cityName ? 'city='+cityName : '' }${ selectedDistrict ? selectedDistrict!='Wszystkie' && '&district='+selectedDistrict : ''}`+priceQuery+areaQuery;

        console.log(encodeURI(path));
        axios.get<Array<FlatBasic>>(encodeURI(path).toString()).then((resp) => {
            dispatch(createGetFlatsSuccessAction(resp.data));
        })
    };

    const debouncedOnTypeCity = debounce( city => { console.log(city); onTypeCity(city) }, 800);

    return(
        <P.Wrapper className={className} >
            <P.H1>Filtry</P.H1>
                <P.LocalizationSection>
                    <P.H2>Lokalizacja</P.H2>
                    <P.StyledInput
                        onChange = {debouncedOnTypeCity}
                        placeholder={"Miasto"}
                        type={"text"}/>
                    { districts && districts.length &&
                        <P.StyledDropdown
                            onChange={onDistrictSelect}
                            optionList={districts ? districtsListToName(districts) : []} />
                    }
                </P.LocalizationSection>
                <P.TypeSection>
                    <P.H2>Typ nieruchomości</P.H2>
                    <ApartmentButton/>
                    <FlatButton/>
                    <RoomButton/>
                    <GarageButton/>
                </P.TypeSection>
                <P.PriceSection>
                    <P.H2>Cena</P.H2>
                    <RangeInput onChange={onPriceChange} type={"number"} unit={"zł"} />
                    <P.StyledToggle />
                </P.PriceSection>
                <P.AreaSection>
                    <P.H2>Powierzchnia</P.H2>
                    <RangeInput  onChange={onAreaChange} type={"number"} unit={`m2` } />
                </P.AreaSection>
                { facilities && (
                    <P.AreaSection>
                        <P.H2>Ograniczenia</P.H2>
                        {
                            facilities.map((facility, index) => (
                                <P.StyledCheckbox
                                    key={index}
                                    label={facility.name}
                                    onChange={(prop) => {
                                    console.log(prop);
                                }}/>
                            ))
                        }
                    </P.AreaSection>)
                }
                <P.Button onClick={submitFilters}> Filtruj </P.Button>
        </P.Wrapper>
    );
};

const mapStateToProps = ( state: StoreState ): FilterState => {
    if (state.mapPage) {
        const {filter} = state.mapPage;
        if (filter) {
            return {
                ...filter,
            }
        }
    }

    return {
        districts: []
    }
};

export default connect<FilterState>(mapStateToProps, {})(Filter);