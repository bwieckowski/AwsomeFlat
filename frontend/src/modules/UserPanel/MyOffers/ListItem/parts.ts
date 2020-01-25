import styled from 'styled-components';
import {colors} from "design-system";


export const Wrapper = styled.div`
  margin: 10px 20px;
  width: 100%;
  padding: 10px 20px;
  border: 1px solid ${ colors.lighterGray };
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  background: none;
  padding: 10px;
  color: ${colors.apartment};
  transition: all 0.4s; 
  border-radius: 10px;
  cursor: pointer;
  
  &:hover{
    background-color: ${colors.apartment};
    color: ${colors.white};
  }
`;

export const Title = styled.h1`
    ${ colors.gray };
    font-style: normal;
    font-size: 12px;
`;