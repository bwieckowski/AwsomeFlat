import styled from 'styled-components';
import {colors} from "../../";


export const RotateContainer = styled.div`
    transition: transform 0.2s;
    transform: ${({isOpen}) => isOpen ? 'rotate(180deg)' : 'rotate(0)'};
`;

export const Container = styled.div`
    border: solid 1px ${colors.lightestGray};
    background-color: ${colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
`;
export const Wrapper = styled.div`
  height: 31px;
  width: 100%;
`;
export const Selected = styled.p`
  margin-left: 10px;
  display: inline;
  text-align: left;
`;

export const Button = styled.button`
  height: 30px;
  width: 30px;
  background-color: ${colors.white};
  border:none;
  border-left: solid 1px ${colors.lightestGray};
  border-bottom: solid 1px ${colors.lightestGray};
  outline: none;
`;

export const List = styled.ul`
  display: ${({isOpen}) => isOpen ? 'block' : 'none'};
  max-height: 150px;
  overflow: scroll;
  background-color: ${colors.white};
  border: 1px solid ${colors.lightestGray};
  border-top: none; 
  position: relative;
  z-index: 10;
`;

export const ListItem = styled.li`
  padding: 5px 0;
  &:hover{
    background-color: ${colors.lightestGray};
  }
`;