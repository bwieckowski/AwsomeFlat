import styled from 'styled-components';
import {colors, shadows} from '../../';

export const Wrapper = styled.div`
  height: 30px;
  width: 50px;
  background-color: ${ ({state}) => state ? colors.activeGreen : colors.lightestGray};
  display: flex;
  align-items: center;
  border-radius: 25px;
  box-shadow: ${shadows.intestBlack25};
  transition: background-color 0.2s;
  cursor: pointer;
`;

export const Dot = styled.div`
  width: 26px;
  height: 26px;
  background-color: ${colors.white};
  box-shadow: ${shadows.black25};
  border-radius: 100%;
  margin-left: 4px;
  transform: ${({state}) => state ? 'translateX(16px)' : 'translateX(0)'};
  transition: transform 0.2s;
  
`;
