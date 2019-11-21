import React from 'react';
import styled from 'styled-components';
import './App.css';
import * as DS from './design-system';

const StyledH1 = styled.h1`
    color: ${DS.colors.red};
`;

function App() {
  return (
    <div className="App">
      <StyledH1>elo</StyledH1>
    </div>
  );
}

export default App;
