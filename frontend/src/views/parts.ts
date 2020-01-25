import styled from "styled-components";
import Message from "../modules/Messages/Messages";

export const StyledFormWrapper = styled.div`
  width: 100%;
  margin-top:14vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledMessage = styled(Message)`
  position: absolute;
  top: 80px;
`;