import React, { useContext } from "react";
import Button from "../Button";
import { WalletContext } from "../../contexts/WalletContext";
import { GOERLI_CHAIN_ID } from "../../constants";

function ConnectWallet() {
  const { chainId, connect, switchChain } = useContext(WalletContext);

  return chainId && chainId !== GOERLI_CHAIN_ID ? (
    <Button onClick={switchChain}>Switch Chain</Button>
  ) : (
    <Button onClick={connect}>Connect wallet</Button>
  );
}

export default ConnectWallet;
