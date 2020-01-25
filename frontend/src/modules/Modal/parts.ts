import styled from "styled-components";
import {colors} from "../../design-system";
import {ReactComponent as Delete} from 'assets/delete.svg';
import FormSection from "../UserPanel/AddOfferForm/FormSection";
import {FormHeader} from "../UserPanel/AddOfferForm/parts";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  top: 0;
  background: rgba(0,0,0,0.4);
  position: absolute;
  overflow: scroll;
  z-index: 9999;
  padding-bottom: 30px;
`;

export const ModalContainer = styled.div`
  background-color: ${colors.white};
  position: relative;
  margin-top: 60px;
  padding-bottom: 30px;
`;

export const DescriptionWrapper = styled.div`
  margin: 20px;
  overflow: hidden;
`;

export const StyledFormSection= styled(FormSection)`
  ${FormHeader}{
    padding-bottom: 0;
   }
`;

export const Image = styled.img`
width: 800px;
height: 100%;
`;

export const StyledDelete = styled(Delete)`
    position: absolute;
    cursor: pointer;
    fill: ${colors.gray};
    top:0;
    right:0;
    width: 20px;
    height: 20px;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const ListItem = styled.li`
  margin-top: 10px;

`;