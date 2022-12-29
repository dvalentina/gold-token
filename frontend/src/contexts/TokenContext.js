import React, { useContext } from "react";
import useToken from "../hooks/useToken";
import { WalletContext } from "./WalletContext";

export const TokenContext = React.createContext();

const TokenProvider = ({ children }) => {
  const { account } = useContext(WalletContext);
  const {
    name,
    decimals,
    totalSupply,
    symbol,
    balance,
    transfer,
    txBeingSent,
    txError,
  } = useToken({ account });
  return (
    <TokenContext.Provider
      value={{
        name,
        decimals,
        totalSupply,
        symbol,
        balance,
        transfer,
        txBeingSent,
        txError,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
