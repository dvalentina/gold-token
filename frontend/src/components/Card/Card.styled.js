import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

export const StyledCard = styled.div`
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 24px 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  background: white;
  box-sizing: border-box;

  @media ${BREAKPOINT.S} {
    border-radius: 0;
  }
`;
