import styled from 'styled-components';
import Filter from 'modules/Filter/Filter';
import Map from "modules/Map/Map";
import FlatList from 'modules/FlatList';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  
`;

export const StyledFlatList = styled(FlatList)`

`;

export const StyledFilter = styled(Filter)`
  margin: 30px 19px 0 44px;
`;

export const MapWrapper = styled.div`
  height: 400px;
  width: 100%;
`;

export const StyledMap = styled(Map)`
  height: auto;
  width: 100%;
`;