import React, {useEffect} from 'react';
import axios from 'axios';
import * as P from 'modules/Filter/parts'
import RangeInput from "design-system/components/RangeInput/RangeInput";


interface FilterProps {
    districts?: Array<string>;
    className?: string;
}

const Filter: React.FC<FilterProps> = ({
    districts,
    className,
}) => {
    useEffect(()=>{
        axios.get('http://localhost:8080/user').then((resp) => {console.log(resp)})
    },[]);
    return(
        <P.Wrapper className={className} >
            <P.H1>Filtry</P.H1>
                <P.LocalizationSection>
                    <P.H2>Lokalizacja</P.H2>
                    <P.StyledInput placeholder={"Miasto"} type={"text"}/>
                    <P.StyledDropdown optionList={districts ? districts : []}/>
                </P.LocalizationSection>
                <P.LocalizationSection>
                    <P.H2>Typ nieruchomości</P.H2>
                    <P.StyledInput placeholder={"Miasto"} type={"text"}/>
                    <P.StyledDropdown optionList={districts ? districts : []}/>
                </P.LocalizationSection>
                <P.PriceSection>
                    <P.H2>Cena</P.H2>
                    <RangeInput type={"number"} unit={"zł"} />
                    <P.StyledToggle />
                </P.PriceSection>
                <P.AreaSection>
                    <P.H2>Powierzchnia</P.H2>
                    <RangeInput type={"number"} unit={"m2"} />
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

export default Filter;