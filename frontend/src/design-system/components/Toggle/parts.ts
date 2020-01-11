import styled from 'styled-components';
import {colors} from '../../colors';
import {shadows} from '../../shadows';

export const Dot = styled.div<{state: boolean}>`
  width: 26px;
  height: 26px;
  background-color: ${colors.white};
  box-shadow: ${shadows.black25};
  border-radius: 100%;
  margin-left: 4px;
  transform: ${({state}) => state ? 'translateX(16px)' : 'translateX(0)'};
  transition: transform 0.2s;
  
`;

export const Wrapper = styled.div<{state: boolean}>`
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


