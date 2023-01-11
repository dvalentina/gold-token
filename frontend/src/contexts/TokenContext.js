import React from "react";
import useToken from "../hooks/useToken";

export const TokenContext = React.createContext();

const TokenProvider = ({ children }) => {
  const {
    name,
    decimals,
    totalSupply,
    symbol,
    balance,
    transfer,
    transferStatus,
    mint,
    mintStatus,
    isMinter,
    burn,
    burnStatus,
    isBurner,
    hash,
  } = useToken();
  return (
    <TokenContext.Provider
      value={{
        name,
        decimals,
        totalSupply,
        symbol,
        balance,
        transfer,
        transferStatus,
        mint,
        mintStatus,
        isMinter,
        burn,
        burnStatus,
        isBurner,
        hash,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
