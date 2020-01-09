import styled from 'styled-components';
import {colors, shadows} from "design-system";

export const StyledContainer = styled.div`
  position:relative;
  width: 100%;
  padding-right: ${({isUnit}) => isUnit ? '0' : '26px'};  
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: center;
  width: 100%;
`;


export const StyledLabel = styled.label`
    color: ${colors.lightestGray};
    position: absolute;
    bottom: 8px; 
    transform: translateY(${({isClicked}) => isClicked ? '-18px' : '0' })
    scale(${({isClicked}) => isClicked ? '0.8' : '1' });
    left: 16px;
    background-color: ${colors.white};
    transition: transform 0.2s ease-in-out;
`;

export const StyledInput = styled.input`
  padding: 8px;
  width: 100%;
  outline: none;  
  box-shadow: ${shadows.black01};
  border: 1px solid ${colors.lightestGray};
`;

export const UnitLabel = styled.div`
  color: ${colors.dark};
  display: flex;
  align-items: center;
  margin-left: 13px;
  color: ${colors.gray}
`;