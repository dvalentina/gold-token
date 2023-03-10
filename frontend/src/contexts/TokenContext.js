import React from "react";
import useTransaction from "../hooks/useTransaction";
import useTokenInfo from "../hooks/useTokenInfo";
import useRoles from "../hooks/useRoles";

export const TokenContext = React.createContext();

const TokenProvider = ({ children }) => {
  const { name, decimals, totalSupply, symbol, balance, updateTokenInfo } =
    useTokenInfo();
  const { isMinter, isBurner, isAdmin, roles, updateRoles } = useRoles();
  const {
    transferTokens,
    mintTokens,
    burnTokens,
    grantRole,
    revokeRole,
    hash,
    txStatus,
  } = useTransaction({
    updateTokenInfo,
    updateRoles,
  });

  return (
    <TokenContext.Provider
      value={{
        name,
        decimals,
        totalSupply,
        symbol,
        balance,
        transferTokens,
        mintTokens,
        burnTokens,
        isMinter,
        isBurner,
        grantRole,
        revokeRole,
        hash,
        txStatus,
        isAdmin,
        roles,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export default TokenProvider;
