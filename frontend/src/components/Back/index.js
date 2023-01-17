import React from "react";
import { ReactComponent as BackIcon } from "../../images/BackIcon.svg";
import { StyledLink as Link } from "./Back.styled";

function Back() {
  return (
    <Link to="/">
      <BackIcon />
      Go Back
    </Link>
  );
}

export default Back;
