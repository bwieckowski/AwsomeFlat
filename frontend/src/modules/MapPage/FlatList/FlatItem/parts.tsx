import React from "react";
import styled from 'styled-components';
import {colors, shadows} from "design-system";
import {ReactComponent as Ruler} from "assets/ruler.svg";
import {ReactComponent as Money} from "assets/money.svg";
import {ReactComponent as Apartment} from "assets/apartment.svg";
import {ReactComponent as Flat} from "assets/flat.svg";
import {ReactComponent as Room} from "assets/room.svg";
import {ReactComponent as Garage} from "assets/garage.svg";


export const Wrapper = styled.div`
  width: 100%;
  padding: 14px 20px;
  background: ${colors.white};
  display: flex;
  box-shadow: ${shadows.black06};
`;

export const Image = styled.img`
  width: 154px;
  cursor: pointer;
`;

export const TypeWrapper = styled.div`
  display: flex;
  margin-top: 5px;
  margin-right: 40px;
  width: 100px;
`;
export const ImageWrapper = styled.div``;

export const InfoWrapper = styled.div`
  margin-left: 19px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;



export const HeaderWrapper = styled.div``;

export const Title = styled.h1`
  color: ${colors.dark};
  font-weight: 500;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 200px;
  cursor: pointer;
`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const Type = styled.div`
  font-size: 10px;
  margin-right: 10px;
`;

export const P = styled.p`
  font-size: 10px;
  cursor: pointer;
  text-decoration: underline;
`;

export const ParametersWrapper = styled.div`
  font-size: 12px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const Parameter = styled.div`
 
`;

export const StyledRuler = styled(Ruler)`
  margin-right: 9px;
`;

export const StyledMoney = styled(Money)`
  margin-right: 5px;
`;


export const StyledApartment = styled(Apartment)`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  fill: ${colors.apartment};
`;

export const StyledFlat = styled(Flat)`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  fill: ${colors.flat};
`;

export const StyledRoom = styled(Room)`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  fill: ${colors.room};
`;

export const StyledGarage = styled(Garage)`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  fill: ${colors.garage}; 
`;

export const icons: {[id: string]: JSX.Element} = {
    room: <StyledRoom/>,
    garage: <StyledGarage/>,
    flat: <StyledFlat/>,
    apartment: <StyledApartment/>,
};