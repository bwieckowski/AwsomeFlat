import styled from 'styled-components';
import {colors} from "../../design-system";
import {MessageType} from "./constants";


export const Wrapper = styled.div<{type: MessageType; isShow: boolean}>`
  display: ${({isShow}) => isShow ? 'block' : 'none'};
  padding: 15px 20px;
  background-color: ${({type}) => type === MessageType.Success ? colors.success : colors.apartment};
  border-radius: 15px;
`;