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
