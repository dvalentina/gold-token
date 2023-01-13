import React, { useContext, useState, useEffect } from "react";
import Card from "../Card";
import { WalletContext } from "../../contexts/WalletContext";
import { TokenContext } from "../../contexts/TokenContext";
import { shortenAddress } from "../../utils";
import Info from "../Info";

function TokenCard() {
  const { account } = useContext(WalletContext);
  const {
    name,
    decimals,
    totalSupply,
    symbol,
    balance,
    isMinter,
    isBurner,
    isAdmin,
  } = useContext(TokenContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (
      name &&
      decimals &&
      totalSupply &&
      symbol &&
      balance &&
      isMinter !== undefined &&
      isBurner !== undefined &&
      isAdmin !== undefined
    ) {
      setLoading(false);
    }
  }, [
    name,
    decimals,
    totalSupply,
    symbol,
    balance,
    isMinter,
    isBurner,
    isAdmin,
  ]);

  const data = {
    Name: name,
    Symbol: symbol,
    "Total supply": `${totalSupply} ${symbol}`,
    Decimals: decimals,
    [`Balance (${shortenAddress(account)})`]: `${balance} ${symbol}`,
  };

  const additional = [];
  if (!isBurner && !isMinter && !isAdmin) {
    additional.push("You don't have any roles");
  } else {
    const roles = [];
    if (isMinter) {
      roles.push("minter");
    }
    if (isBurner) {
      roles.push("burner");
    }
    if (isAdmin) {
      roles.push("admin");
    }

    additional.push(`Your roles: ${roles.join(", ")}`);
  }

  return (
    <Card>
      <Info
        title="Token Info"
        data={data}
        loading={loading}
        additional={additional}
      />
    </Card>
  );
}

export default TokenCard;
