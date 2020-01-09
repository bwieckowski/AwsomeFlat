import React from "react"
import styled from "styled-components"
import {breakposints, from} from 'design-system/grid/media'

const renderColumnsStyles = ( sizes ) => {
    return Object.keys(breakposints).map((key, id)=>(
        `@media(min-width: ${breakposints[key]}px){ width: ${(sizes[id]*100)}%}`
    ));
}

export const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${({sizes}) => ( renderColumnsStyles(sizes) )}
  
  ${from('tablet')}{
  padding: 20px;
  }
`;

// const Col: React.FC<ColProps> = ( {children, sizes} ) => (
//     <ColWrapper sizes={sizes}>
//         {children}
//     </ColWrapper>
// )

export default ColWrapper;


