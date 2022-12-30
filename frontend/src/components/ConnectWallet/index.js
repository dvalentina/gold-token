import React, { useContext } from "react";
import Button from "../Button";
import { WalletContext } from "../../contexts/WalletContext";
import { GOERLI_CHAIN_ID } from "../../constants";

function ConnectWallet() {
  const { chainId, connect, switchChain, disabled } = useContext(WalletContext);

  return chainId && chainId !== GOERLI_CHAIN_ID ? (
    <Button onClick={switchChain} disabled={disabled}>
      {disabled ? "Go to your wallet :-)" : "Switch Chain"}
    </Button>
  ) : (
    <Button onClick={connect} disabled={disabled}>
      {disabled ? "Go to your wallet :-)" : "Connect wallet"}
    </Button>
  );
}

export default ConnectWallet;
