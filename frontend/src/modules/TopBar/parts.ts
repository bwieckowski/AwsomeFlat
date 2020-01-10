import styled from 'styled-components';
import {colors, shadows} from 'design-system';
import {Link} from 'react-router-dom';
import {media } from 'design-system';

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-shadow: ${shadows.black04};
`;

export const LogoWrapper = styled.div`
  
`;

export const LinksWrapper = styled.ul`
   display: none;
   
  ${media.from('tablet')}{
    display: block;
  }

`;

export const LinkItem = styled.li`
  display: inline-block;
  margin-right: 77px;
`;

export const HamburgerWrapper = styled.div`
  display: block;
   
  ${media.from('tablet')}{
    display: none;
  }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${ colors.dark}
`;