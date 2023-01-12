import { Link } from "react-router-dom";
import styled from "styled-components";
import { BREAKPOINT } from "../../constants";
import Button from "../Button";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ right }) => (right ? "row-reverse" : "row")};
  gap: 8px;
  width: 100%;

  @media (${BREAKPOINT.M}) {
    flex-direction: row;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 16px;
  text-align: ${({ right }) => (right ? "right" : "left")};

  @media (${BREAKPOINT.M}) {
    text-align: left;
  }
`;

export const Icon = styled.div`
  svg {
    width: 28px;
    height: 28px;
  }
`;

export const StyledButton = styled(Button)`
  width: fit-content;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  align-self: flex-end;
  @media (${BREAKPOINT.M}) {
    align-self: flex-start;
  }
`;
