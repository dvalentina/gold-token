import React from "react";
import useToken from "../hooks/useToken";
import useTokenInfo from "../hooks/useTokenInfo";
import useRoles from "../hooks/useRoles";

export const TokenContext = React.createContext();

const TokenProvider = ({ children }) => {
  const { name, decimals, totalSupply, symbol, balance, updateTokenInfo } =
    useTokenInfo();
  const { transfer, mint, burn, hash, txStatus } = useToken({
    updateTokenInfo,
  });
  const { isMinter, isBurner } = useRoles();

  return (
    <TokenContext.Provider
      value={{
        name,
        decimals,
        totalSupply,
        symbol,
        balance,
        transfer,
        mint,
        isMinter,
        burn,
        isBurner,
        hash,
        txStatus,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
