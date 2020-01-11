import React from 'react';
import PropTypes from 'prop-types';
import * as P from './parts'
import RangeInput from "design-system/components/RangeInput/RangeInput";

const Filter = ({
    districts
}) => {

    return(
        <P.Wrapper>
            <P.H1>Filtry</P.H1>
                <P.LocalizationSection>
                    <P.H2>Lokalizacja</P.H2>
                    <P.StyledInput placeholder={"Miasto"} type={"text"}/>
                    <P.StyledDropdown optionList={districts}/>
                </P.LocalizationSection>
                <P.LocalizationSection>
                    <P.H2>Typ nieruchomości</P.H2>
                    <P.StyledInput placeholder={"Miasto"} type={"text"}/>
                    <P.StyledDropdown optionList={districts}/>
                </P.LocalizationSection>
                <P.PriceSection>
                    <P.H2>Cena</P.H2>
                    <RangeInput unit={"zł"} />
                    <P.StyledToggle />
                </P.PriceSection>
                <P.AreaSection>
                    <P.H2>Powierzchnia</P.H2>
                    <RangeInput unit={"m2"} />
                </P.AreaSection>
                <P.AreaSection>
                    <P.H2>Ograniczenia</P.H2>
                    <P.StyledCheckbox label={'opcja 1'} onChange={(prop)=>{
                        console.log(prop);
                    }} />
                    <P.StyledCheckbox label={'opcja 2'} onChange={(prop)=>{
                        console.log(prop);
                    }} />
                    <P.StyledCheckbox label={'opcja 3'} onChange={(prop)=>{
                        console.log(prop);
                    }} />
                </P.AreaSection>
        </P.Wrapper>
    );
};


Filter.defaultProps = {
    districts: [],
};

Filter.propTypes = {
    districts: PropTypes.array,
};

export default Filter;