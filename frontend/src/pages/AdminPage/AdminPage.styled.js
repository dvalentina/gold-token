import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

export const FormGrid = styled.div`
  display: flex;
  grid-row: 1 / 3;
  grid-column: 3 / 5;

  @media ${BREAKPOINT.M} {
    grid-column: 2;
    grid-row: 1;
  }

  @media ${BREAKPOINT.S} {
    grid-column: 1;
    grid-row: 1;
  }
`;

export const TransactionGrid = styled.div`
  display: flex;
  grid-row: 3;
  grid-column: 3 / 5;

  @media ${BREAKPOINT.M} {
    grid-column: 2;
    grid-row: 2;
  }

  @media ${BREAKPOINT.S} {
    grid-column: 1;
    grid-row: 2;
  }
`;
