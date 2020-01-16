import styled from 'styled-components';
import {colors, shadows} from "../../../../design-system";
import {ReactComponent as Ruler} from "../../../../assets/ruler.svg";
import {ReactComponent as Money} from "../../../../assets/money.svg";

export const Wrapper = styled.div`
  width: 100%;
  padding: 14px 20px;
  background: ${colors.white};
  display: flex;
  box-shadow: ${shadows.black06};
`;

export const Image = styled.img`
  width: 154px;
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
`;

export const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Type = styled.div`
  font-size: 10px;
  margin-right: 10px;
`;

export const P = styled.p`
  font-size: 10px;
  cursor: pointer;
  text-decoration: underline;
  margin-right: 20px;
`;

export const ParametersWrapper = styled.div`
  font-size: 12px;
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