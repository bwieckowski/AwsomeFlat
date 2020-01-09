import React from 'react'
import styled from "styled-components"
import {from} from 'design-system/grid/media';

const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  ${from('tablet')}{
    padding: 0 20px;
  }
`;

const Row = ({children} ) => (
  <RowWrapper>
    {children}
  </RowWrapper>
);

export default Row;
