import React from "react";
import About from ".";
import {
  Text,
  StyledButton as Button,
  StyledLink as Link,
} from "./About.styled";
import { ReactComponent as AdminIcon } from "../../images/AdminIcon.svg";

function AboutAdmin() {
  return (
    <About right icon={<AdminIcon />}>
      <Text right>You are an admin.</Text>
      <Link to="/admin">
        <Button small>Manage roles</Button>
      </Link>
    </About>
  );
}

export default AboutAdmin;
