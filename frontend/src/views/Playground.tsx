import React from 'react'
import styled from 'styled-components';
import Input from "design-system/components/Input/Input";
import RangeInput from "design-system/components/RangeInput/RangeInput";
import Dropdown from "design-system/components/Dropdown";
import Toggle from "design-system/components/Toggle/Toggle";
import Filter from "modules/MapPage/Filter/Filter";
import FlatItem from 'modules/MapPage/FlatList/FlatItem/FlatItem';
import {colors} from 'design-system'
import img from 'assets/apartment-mini.png'


const Wrapper = styled.div`
   width: 400px;
   padding: 10px;
   background-color: ${colors.background};
`;

const StyledInput = styled(Input)`
  margin: 10px 0;
`;

const StyledRangeInput = styled(RangeInput)`
  margin: 10px 0;
`;

const StyledDropdown = styled(Dropdown)`
  width: 150px;
`;

const StyledToggle = styled(Toggle)`
  margin: 10px 0;
`;

const dropDownCallback = (item: React.MouseEvent<HTMLElement,MouseEvent>) => {
    console.log(item.target);
};

const Playground = () =>{
    return (
            <Wrapper>
                 <StyledInput placeholder={"imie"} type={"text"} movingPlaceholder={false}/>
                 <StyledInput placeholder={"imie"} type={"text"}/>
                 <StyledInput placeholder={"imie"} type={"text"}  initValue={"testowe dane"}/>
                 <StyledInput placeholder={"piniąszki"} type={"number"} unit={"zł"}/>
                 <StyledRangeInput  type={"number"} unit={"zł"} />
                 <StyledDropdown onChange={dropDownCallback} optionList={['item1', 'item2', 'item3']} />
                 <StyledToggle onChange={(state) => { console.log(state)}}/>
                 <FlatItem img={img} title={"Fajne mieszkanko"} price={30} area={12} />
             <Filter/>
            </Wrapper>
    )
};

export default Playground;