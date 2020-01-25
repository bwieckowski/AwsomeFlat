import styled from 'styled-components';
import {colors, media } from 'design-system';
import {Link} from 'react-router-dom';
import {BreakpointsName} from "../../design-system/grid/media";

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${colors.white}
  align-items: center;
  padding: 0 30px;
  position: sticky;
  top: 0;
  z-index: 9999;
  
   &:before{
     content: '';
     display: block;
     height: 5px;
     width: calc(100% + 60px);
     top: 60px;
     left: -60px;
     position: absolute; 
     background: linear-gradient(${colors.white}, rgba(0,0,0,0.1) );
   }
  
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  
  ${media.from(BreakpointsName.desktop)}{
    width: 1200px;
    margin: 0 auto;
  }
`;

export const LogoWrapper = styled.div``;

export const LinksWrapper = styled.ul`
   display: none;
   
  ${media.from(BreakpointsName.tablet)}{
    display: block;
  }
`;

export const LinkItem = styled.li`
  display: inline-block;
  margin-right: 50px;
`;

export const HamburgerWrapper = styled.div`
  display: block;
   
  ${media.from(BreakpointsName.tablet)}{
    display: none;
  }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${ colors.dark}
`;