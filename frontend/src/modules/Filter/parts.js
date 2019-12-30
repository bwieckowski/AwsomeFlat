import styled from 'styled-components';
import Input from "design-system/components/Input/Input";
import Dropdown from "design-system/components/Dropdown";
import {colors} from 'design-system'
import Toggle from "design-system/components/Toggle/Toggle";
import Checkbox from "design-system/components/Checkbox";

export const Wrapper = styled.div`
  width: 380px;
  border-radius: 34px;
  background-color: ${colors.white};
`;

export const StyledToggle = styled(Toggle)`
  margin-top: 20px;
`;

export const H1 = styled.h1`
    font-size: 24px;
    line-height: 29px;
    font-weight: 500;
    margin-bottom: 7px;
    padding-top: 22px;
`;

export const H2 = styled.h2`
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 20px;
    
`;

export const Section = styled.div`
  margin: 40px 0 0 37px; 
  text-align: left;
`;

export const LocalizationSection = styled(Section)`
  width: 135px;
`;

export const PriceSection = styled(Section)`
  width: 220px;
`;

export const AreaSection = styled(Section)`
  width: 220px;
  padding-bottom: 40px;
`;


export const StyledInput = styled(Input)`
  margin-bottom: 30px;
`;

export const StyledDropdown = styled(Dropdown)`
  margin-bottom: 40px;
`;

export const StyledCheckbox = styled(Checkbox)`
  margin-bottom: 10px;
`;