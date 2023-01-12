import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

export const LogoGrid = styled.div`
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

export const AboutGrid = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 24px;

  grid-row: 1;
  grid-column: 2;

  @media ${BREAKPOINT.M} {
    padding-top: 0;
    padding-bottom: 16px;

    grid-column: 2;
    grid-row: 2;
  }

  @media ${BREAKPOINT.S} {
    padding: 0 24px 16px 24px;

    grid-column: 1;
    grid-row: 2;
  }
`;
