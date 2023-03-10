import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

export const AccountGrid = styled.div`
  display: flex;
  grid-row: 1;
  grid-column: 2 / 4;

  @media ${BREAKPOINT.M} {
    grid-column: 2;
    grid-row: 2;
  }

  @media ${BREAKPOINT.S} {
    grid-column: 1;
    grid-row: 2;
  }
`;

export const TokenGrid = styled.div`
  display: flex;
  grid-column: 2 / 4;
  grid-row: 2;

  @media ${BREAKPOINT.M} {
    grid-column: 2;
    grid-row: 3;
  }

  @media ${BREAKPOINT.S} {
    grid-column: 1;
    grid-row: 3;
  }
`;

export const FormGrid = styled.div`
  display: flex;
  grid-row: 1 / 3;
  grid-column: 4 / 6;

  @media ${BREAKPOINT.M} {
    grid-column: 2;
    grid-row: 4;
  }

  @media ${BREAKPOINT.S} {
    grid-column: 1;
    grid-row: 4;
  }
`;

export const WalletGrid = styled.div`
  display: flex;
  grid-row: 1;
  grid-column: 3 / 5;

  @media ${BREAKPOINT.M} {
    grid-column: 2;
    grid-row: 2;
  }

  @media ${BREAKPOINT.S} {
    grid-column: auto;
    grid-row: 2;
    padding: 0 24px;
  }
`;

export const TransactionGrid = styled.div`
  display: flex;
  grid-row: 3;
  grid-column: 2 / 6;

  @media ${BREAKPOINT.M} {
    grid-column: 2;
    grid-row: 5;
  }

  @media ${BREAKPOINT.S} {
    grid-column: 1;
    grid-row: 5;
  }
`;
