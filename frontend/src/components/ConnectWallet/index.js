import React from "react";
import { Button } from "./ConnectWallet.styled";

function ConnectWallet({ connect }) {
  return <Button onClick={() => connect()}>Connect wallet</Button>;
}

export default ConnectWallet;
