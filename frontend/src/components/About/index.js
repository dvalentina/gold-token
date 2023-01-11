import React from "react";
import { Container, Icon, Text } from "./About.styled";
import { ReactComponent as InfoIcon } from "../../images/InfoIcon.svg";
import Link from "../Link";

function About() {
  return (
    <Container>
      <Icon>
        <InfoIcon />
      </Icon>
      <div>
        <Text>A project for studying interaction with ERC-20 tokens.</Text>
        <Text>
          Read more here{" "}
          <Link link="https://github.com/dvalentina/gold-token" text="GitHub" />
        </Text>
      </div>
    </Container>
  );
}

export default About;
