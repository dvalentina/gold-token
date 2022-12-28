import React from "react";
import { StyledButton } from "./Button.styled";

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
