import React from "react";
import { StyledCard } from "./Card.styled";

function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

export default Card;
