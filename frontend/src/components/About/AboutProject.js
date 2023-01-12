import React from "react";
import About from ".";
import { Text } from "./About.styled";
import { ReactComponent as InfoIcon } from "../../images/InfoIcon.svg";
import Link from "../Link";

function AboutProject() {
  return (
    <About icon={<InfoIcon />}>
      <Text>A project for studying interaction with ERC-20 tokens.</Text>
      <Text>
        Read more here{" "}
        <Link link="https://github.com/dvalentina/gold-token" text="GitHub" />
      </Text>
    </About>
  );
}

export default AboutProject;
