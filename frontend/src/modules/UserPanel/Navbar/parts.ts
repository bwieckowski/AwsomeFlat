import styled from "styled-components";
import {colors} from "design-system";
import {Link} from "react-router-dom";

export const Wrapper = styled.div`
  width: 250px;
  height: fit-content;
  padding: 33px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 33px;
`;

export const Image = styled.img`
  width: 100px;
`;

export const Header = styled.div`
    margin-bottom: 35px;
`;

export const Name = styled.div`
  margin-top: 10px;
  font-weight: 600;
`;
export  const Menu = styled.ul``;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.darker};
    
`;

export const ItemMenu = styled.li`

  list-style-type: none;
  margin-bottom: 20px;

`;