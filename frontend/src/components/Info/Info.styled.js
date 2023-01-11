import styled from "styled-components";
import { BREAKPOINT } from "../../constants";

export const Title = styled.h3`
  margin: 0;
`;

export const Text = styled.p`
  display: flex;
  gap: 6px;
  margin-top: 0;
  margin-bottom: 0;

  font-size: 16px;
  white-space: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
`;

export const Row = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
  justify-content: space-between;

  @media (${BREAKPOINT.M}) {
    gap: ${({ wrap }) => (wrap ? "16px" : "24px")};
  }
`;

export const IconButton = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  align-self: center;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;
