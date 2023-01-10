import styled from "styled-components";
import { BREAKPOINT } from "../../constants";
import RadioButtons from "../RadioButtons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const StyledRadioButtons = styled(RadioButtons)`
  @media (${BREAKPOINT.S}) {
    button:first-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    button:last-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;
