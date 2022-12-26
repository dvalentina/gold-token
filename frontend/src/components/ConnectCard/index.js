import React from "react";
import useConnection from "../../hooks/useConnection";
import { Container, Card } from "./ConnectCard.styled";
import ConnectWallet from "../ConnectWallet";

function ConnectCard() {
  const { connect, account, balance } = useConnection();

  return (
    <Container>
      {account ? (
        <Card>
          <p>Account: {account}</p>
          <p>Balance: {balance}</p>
        </Card>
      ) : (
        <ConnectWallet connect={connect} />
      )}
    </Container>
  );
}

export default ConnectCard;
