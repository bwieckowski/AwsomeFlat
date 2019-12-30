import styled from 'styled-components';
import {colors} from "../../";
import { ReactComponent as Checked } from '../../../assets/checked.svg';

export const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
`;
export const Box = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid ${colors.darker};
  border-radius: 2px;
  display: flex;
  justify-content: center; 
  align-items: center; 
  margin-right: 5px;
  
`;

export const StyledChecked = styled(Checked)`
  display: ${({isChecked}) => isChecked ? 'block' : 'none'};
`;

export const Label = styled.div``;