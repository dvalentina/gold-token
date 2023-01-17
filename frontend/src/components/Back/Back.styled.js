import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: black;
  text-decoration: none;

  svg {
    width: 28px;
    height: 28px;
  }
`;
