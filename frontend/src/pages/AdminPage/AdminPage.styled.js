import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

export const GrantGrid = styled.div`
  display: flex;
  grid-row: 2 / 4;
  grid-column: 2 / 4;

  @media ${BREAKPOINT.M} {
    grid-column: 2;
    grid-row: 5;
  }

  @media ${BREAKPOINT.S} {
    grid-column: 1;
    grid-row: 5;
  }
`;

export const RevokeGrid = styled.div`
  display: flex;
  grid-row: 2 / 4;
  grid-column: 4 / 6;

  @media ${BREAKPOINT.M} {
    grid-column: 2;
    grid-row: 5;
  }

  @media ${BREAKPOINT.S} {
    grid-column: 1;
    grid-row: 5;
  }
`;
