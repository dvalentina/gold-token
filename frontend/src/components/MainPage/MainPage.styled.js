import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

export const Container = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: auto 200px 200px 200px 200px auto;
  padding: 24px 0;

  @media ${BREAKPOINT.M} {
    grid-template-columns: auto 400px auto;
  }

  @media ${BREAKPOINT.S} {
    grid-template-columns: auto;
  }
`;

export const LogoGrid = styled.div`
  display: flex;
  justify-content: center;
  grid-row: 1;
  grid-column: 2 / -2;

  @media ${BREAKPOINT.M} {
    grid-column: 2;
    grid-row: 1;
  }

  @media ${BREAKPOINT.S} {
    grid-column: 1;
    grid-row: 1;
  }
`;

export const AccountGrid = styled.div`
  display: flex;
  grid-row: 2;
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
  grid-row: 3;

  @media ${BREAKPOINT.M} {
    grid-column: 2;
    grid-row: 3;
  }

  @media ${BREAKPOINT.S} {
    grid-column: 1;
    grid-row: 3;
  }
`;

export const TransferGrid = styled.div`
  display: flex;
  grid-row: 2 / 4;
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
  grid-row: 2;
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
