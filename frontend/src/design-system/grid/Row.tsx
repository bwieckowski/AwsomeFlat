import React from 'react'
import styled from "styled-components"
import {BreakpointsName, from} from './media';

const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  ${from(BreakpointsName.tablet)}{
    padding: 0 20px;
  }
`;

const Row: React.FC = ( {children} ) => (
  <RowWrapper>
    {children}
  </RowWrapper>
);

export default Row;
