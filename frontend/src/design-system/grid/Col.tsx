import React from "react"
import styled from "styled-components"
import {breakpoints, BreakpointsName, from} from 'design-system/grid/media'

const renderColumnsStyles = ( sizes: number[] ) =>
    Object.keys(breakpoints).map((key, id) => (
        `@media(min-width: ${breakpoints[key]}px){ width: ${(sizes[id] * 100)}%}`
    ));

export const ColWrapper = styled.div<{ sizes: number[]}>`
  display: flex;
  flex-direction: column;
  ${({ sizes }) => ( renderColumnsStyles(sizes) )}
  
  ${from(BreakpointsName.tablet)}{
  padding: 20px;
  }
`;

interface ColProps {
    sizes: number[];
}

export const Col: React.FC<ColProps> = ( {children, sizes} ) => (
    <ColWrapper sizes={sizes}>
        {children}
    </ColWrapper>
);

export default ColWrapper;


