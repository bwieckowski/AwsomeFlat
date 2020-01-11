import styled from "styled-components";
import  { ReactComponent as Apartment } from "assets/apartment.svg"
import  { ReactComponent as Garage } from "assets/garage.svg"
import  { ReactComponent as Flat } from "assets/flat.svg"
import  { ReactComponent as Room } from "assets/room.svg"


import {colors} from "../../colors";


export const StyledApartment = styled(Apartment)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  fill: ${colors.apartment};
`;

export const StyledFlat = styled(Flat)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  fill: ${colors.flat};
`;

export const StyledRoom = styled(Room)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  fill: ${colors.room};
`;

export const StyledGarage = styled(Garage)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  fill: ${colors.garage};
`;

export const Button = styled.button<{color: string}>`
  background: none;
  display: flex;
  align-items: center;
  border: none;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  color: ${colors.black};
  transition: all 0.2s ease;
  
  &:hover{
    color: ${colors.white};
    background-color: ${({color}) => color};
    ${ StyledApartment }{
      fill: ${colors.white}!important;
    }
     ${ StyledFlat }{
      fill: ${colors.white}!important;
    }
     ${ StyledRoom }{
      fill: ${colors.white}!important;
    }
     ${ StyledGarage }{
      fill: ${colors.white}!important;
    }
  }
`;



