import React from "react";
import { Link as StyledLink } from "./Link.styled";

function Link({ text, link }) {
  return (
    <StyledLink href={link} target="_blank" rel="noreferrer">
      ={"> "}
      {text}
    </StyledLink>
  );
}

export default Link;
