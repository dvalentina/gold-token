import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "body"
    "footer";
  padding: 24px 0;
  height: 100%;
  grid-template-rows: auto 1fr auto;

  @media (${BREAKPOINT.M}) {
    height: auto;
  }
`;

export const HeaderGrid = styled.div`
  grid-area: header;
  height: fit-content;
`;

export const BodyGrid = styled.div`
  grid-area: body;
`;

export const FooterGrid = styled.div`
  display: flex;
  justify-content: center;
  grid-area: footer;
  margin-top: 24px;
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
