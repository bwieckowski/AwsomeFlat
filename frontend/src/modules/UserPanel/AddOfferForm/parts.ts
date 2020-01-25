import styled from "styled-components";
import {Checkbox, colors, Input, media} from "design-system";
import { Map } from 'modules/MapPage/Map/Map';
import {BreakpointsName} from "../../../design-system/grid/media";

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-top: 28px;
`;

export const SectionWrapper = styled.div`
   overflow: hidden;
  
  ${media.from(BreakpointsName.tablet)}{
    padding-right: 20px;
   }
   
`;


export const TitleInputWrapper = styled.div`
  margin-top: 38px;
  ${media.from(BreakpointsName.tablet)}{
    padding-left: 120px;
  }
`;

export const StyledInput = styled(Input)``;

export const AddresInput = styled(StyledInput)`
  width: 100%;
  margin-bottom: 20px;
  
  ${media.from(BreakpointsName.tablet)}{
      width: 200px;
  }

`;

export const InputWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  
  ${media.from(BreakpointsName.tablet)}{
     max-width: 300px;
  }
`;

export const StyledCheckbox = styled(Checkbox)`
  margin-bottom: 12px;
  width: fit-content;
`;

export const StyledMap = styled(Map)`
  width: 100%;
  height: 220px;
`;

export const StyledButton = styled.button`
    background: ${colors.button};
    padding: 12px 20px;
    margin: 10px calc(100% - 150px);
    font-size: 14px;
    width: 150px;
    color: ${colors.white};
    border: none;
    cursor: pointer;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    &:disabled{
      background-color: ${colors.buttonDisabled};
      cursor: not-allowed;
    }
`;

export const FormTile = styled.h2`
  font-weight: normal;
  width: min-content;
  color: ${colors.gray};
  font-size: 14px;
  word-wrap: break-word;
`;

export const FormHeader = styled.div`
  
  display: none;
  
  ${media.from(BreakpointsName.tablet)}{
    display: block;
  }
 
  padding-bottom: 25px;
  &:after{
    content: '';
    width: 100%;
    border-bottom: 1px solid ${colors.lightestGray};
    position: absolute;
    top: 10px;
    right: -120px;
    
    display: none;
  
  ${media.from(BreakpointsName.tablet)}{
    display: block;
  }
 
  }
`;

export const FormBody = styled.div`
  ${media.from(BreakpointsName.tablet)}{
    padding-left: 120px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  padding: 33px 15px;
  
  ${media.from(BreakpointsName.tablet)}{
    padding: 33px;
    border-radius: 33px;
  }
`;

export const Title = styled.h1`
  text-align: left;

`;