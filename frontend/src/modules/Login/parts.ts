import styled from 'styled-components';
import {colors, Input} from "../../design-system";
import {StyledInput, StyledLabel} from "../../design-system/components/Input/parts";

export const Wrapper = styled.div`
    padding: 60px 150px 62px;
    background: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 650px;
    border-radius: 33px;
`;

export const FormWrapper = styled.div`
  width: 300px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled.button`
    background: ${colors.button};
    padding: 12px 20px;
    margin-top: 20px;
    font-size: 14px;
    width: 150px;
    color: ${colors.white};
    border: none;
    cursor: pointer;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const LoginInput = styled(Input)`
  margin-top: 20px;
  
  ${StyledInput} {
   padding: 12px 0 12px 20px;
  };
  
  ${StyledLabel}{
    bottom: 12px;
  }
`;

export const Header = styled.h1`
  color: ${ colors.darker }
  margin-bottom: 20px;
`;