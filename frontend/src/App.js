import React from 'react';
import styled from 'styled-components';
import './App.css';
import Input from "./design-system/components/Input/Input";
import RangeInput from "./design-system/components/RangeInput/RangeInput";

const Wrapper = styled.div`
   width: 400px;
   padding: 10px;
`;

const StyledInput = styled(Input)`
  margin: 10px 0;
`;
function App() {
  return (
    <div className="App">
        <Wrapper>

         <StyledInput placeholder={"imie"} type={"text"} movingPlaceholder={false}/>
         <StyledInput placeholder={"imie"} type={"text"}/>
         <StyledInput placeholder={"imie"} type={"text"}  initValue={"testowe dane"}/>
         <StyledInput placeholder={"piniąszki"} type={"number"}  initValue={"testowe dane"} unit={"zł"}/>
         <RangeInput unit={"zł"} />
        </Wrapper>
    </div>
  );
}

export default App;
