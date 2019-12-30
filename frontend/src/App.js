import React from 'react';
import styled from 'styled-components';
import './App.css';
import Input from "design-system/components/Input/Input";
import RangeInput from "design-system/components/RangeInput/RangeInput";
import Dropdown from "design-system/components/Dropdown";
import Toggle from "design-system/components/Toggle/Toggle";
import Filter from "modules/Filter/Filter";
import {colors} from 'design-system'

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

const dropDownCallback = (item) => {
    console.log(item.target.innerHTML);
};

function App() {
  return (
    <div className="App">
        <Wrapper>

         <StyledInput placeholder={"imie"} type={"text"} movingPlaceholder={false}/>
         <StyledInput placeholder={"imie"} type={"text"}/>
         <StyledInput placeholder={"imie"} type={"text"}  initValue={"testowe dane"}/>
         <StyledInput placeholder={"piniąszki"} type={"number"} unit={"zł"}/>
         <StyledRangeInput unit={"zł"} />
         <StyledDropdown onChange={dropDownCallback} optionList={['item1', 'item2', 'item3']} />
         <StyledToggle onChange={(state) => { console.log(state)}}/>
         <Filter/>
        </Wrapper>
    </div>
  );
}

export default App;
