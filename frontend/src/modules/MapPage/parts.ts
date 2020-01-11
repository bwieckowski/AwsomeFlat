import styled from 'styled-components';
import Filter from 'modules/MapPage/Filter/Filter';
import Map from "modules/MapPage/Map/Map";
import FlatList from 'modules/MapPage/FlatList';
import {BreakpointsName} from "../../design-system/grid/media";
import {media} from "../../design-system";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: calc(100% - 60px);
  justify-content: space-between;
`;

export const StyledFilter = styled(Filter)`
  margin: 30px 19px 20px 44px;
  overflow: scroll;
  display: none;
  
  ${media.from(BreakpointsName.desktop)}{
    display: block;
  }
`;

export const StyledFlatList = styled(FlatList)`
  margin-top: 30px;
  overflow: scroll;
  margin-right: 20px;
  width: 100%;
  
  ${media.from(BreakpointsName.tablet)}{
    width: 520px;
  }
  
`;

export const StyledMap = styled(Map)`
  display: none;
  ${media.from(BreakpointsName.tablet)}{
      display: block;
      height: auto;
      width: 60%;
  }
`;