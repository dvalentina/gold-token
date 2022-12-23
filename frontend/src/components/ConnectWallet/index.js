import React from "react";
import useConnection from "../../hooks/useConnection";

function ConnectWallet() {
  const { connect, account, balance } = useConnection();
  return account ? (
    <>
      <p>Your account: {account}</p>
      <p>Your balance: {balance}</p>
    </>
  ) : (
    <button onClick={() => connect()}>Connect wallet</button>
  );
}

export default ConnectWallet;
