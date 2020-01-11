import styled from 'styled-components';
import Filter from 'modules/MapPage/Filter/Filter';
import Map from "modules/MapPage/Map/Map";
import FlatList from 'modules/MapPage/FlatList';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: calc(100% - 60px);
`;

export const StyledFlatList = styled(FlatList)`

`;

export const StyledFilter = styled(Filter)`
  margin: 30px 19px 20px 44px;
`;

export const MapWrapper = styled.div`
  height: 400px;
  width: 100%;
`;

export const StyledMap = styled(Map)`
  height: auto;
  width: 100%;
`;