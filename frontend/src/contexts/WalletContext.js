import React from "react";
import useWallet from "../hooks/useWallet";

export const WalletContext = React.createContext();

const WalletProvider = ({ children }) => {
  const { account, balance, connect, switchChain, chainId, disabled } =
    useWallet();
  return (
    <WalletContext.Provider
      value={{
        account,
        balance,
        connect,
        switchChain,
        chainId,
        disabled,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;
