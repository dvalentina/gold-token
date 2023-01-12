import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "body";
  padding: 24px 0;
`;

export const HeaderGrid = styled.div`
  grid-area: header;
`;

export const BodyGrid = styled.div`
  grid-area: body;
`;

export const Grid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: auto 200px 200px 200px 200px auto;

  @media ${BREAKPOINT.M} {
    grid-template-columns: auto 400px auto;
  }

  @media ${BREAKPOINT.S} {
    grid-template-columns: auto;
  }
`;
