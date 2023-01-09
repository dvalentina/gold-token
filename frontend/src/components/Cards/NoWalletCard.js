import React from "react";
import { EMOJI } from "../../constants";
import Card from "../Card";
import { Title, Text, Link } from "../Info/Info.styled";

function NoWalletCard() {
  const dappUrl = window.location.href.split("//")[1];
  const metamaskAppDeepLink = "https://metamask.app.link/dapp/" + dappUrl;

  return (
    <Card>
      <Title>No wallet detected {EMOJI.ERROR}</Title>
      <Text wrap>
        To use this website, you will need an ethereum wallet to be installed in
        your browser.
      </Text>
      <Text wrap>MetaMask suits most platforms.</Text>
      <Link href={metamaskAppDeepLink} target="_blank" rel="noreferrer">
        ={">"} Install MetaMask
      </Link>
    </Card>
  );
}

export default NoWalletCard;
