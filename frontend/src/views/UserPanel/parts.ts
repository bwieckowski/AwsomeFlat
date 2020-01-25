import styled from "styled-components";
import UserPanelControl from "./UserPanelControl";
import {media} from "../../design-system";
import {BreakpointsName} from "../../design-system/grid/media";
import Navbar from "../../modules/UserPanel/Navbar/Navbar";

export const StyledUserPanelControl = styled(UserPanelControl)`
  display: flex;
  width: 100%;
  
  ${media.from(BreakpointsName.tablet)}{
   margin-top: 26px;
  }
  
  ${media.from(BreakpointsName.desktop)}{
    width: 1200px;
    margin: 26px auto 0;
    padding: 26px auto;
  }

`;

export const Wrapper = styled.div`
  width: 100%;
  ${media.from(BreakpointsName.tablet)}{
    padding-right: 20px;
  }
`;

export const StyledNavbar = styled(Navbar)`
  display: none;
  margin: 0 20px;
  position: sticky;
  top: 86px;
  
  ${media.from(BreakpointsName.tablet)}{
    display: flex;
  }
  
  
`;

export const EmptyWrapper = styled.div``;
