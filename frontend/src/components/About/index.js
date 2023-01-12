import React from "react";
import { Container, Icon, Info } from "./About.styled";

function About({ right, icon, children }) {
  return (
    <Container right={right}>
      <Icon>{icon}</Icon>
      <Info>{children}</Info>
    </Container>
  );
}

export default About;
