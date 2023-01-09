import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

export const CardGrid = styled.div`
  display: flex;
  justify-content: center;
  grid-row: 1;
  grid-column: 3 / -3;

  @media ${BREAKPOINT.M} {
    grid-column: 2;
    grid-row: 1;
  }

  @media ${BREAKPOINT.S} {
    grid-column: 1;
    grid-row: 1;
  }
`;
