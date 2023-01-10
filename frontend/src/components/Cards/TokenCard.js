import React, { useContext, useState, useEffect } from "react";
import Card from "../Card";
import { WalletContext } from "../../contexts/WalletContext";
import { TokenContext } from "../../contexts/TokenContext";
import { shortenAddress } from "../../utils";
import Info from "../Info";

function TokenCard() {
  const { account } = useContext(WalletContext);
  const { name, decimals, totalSupply, symbol, balance, isMinter, isBurner } =
    useContext(TokenContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (
      name &&
      decimals &&
      totalSupply &&
      symbol &&
      balance &&
      isMinter !== undefined &&
      isBurner !== undefined
    ) {
      setLoading(false);
    }
  }, [name, decimals, totalSupply, symbol, balance, isMinter, isBurner]);

  const data = {
    Name: name,
    Symbol: symbol,
    "Total supply": `${totalSupply} ${symbol}`,
    Decimals: decimals,
    [`Balance (${shortenAddress(account)})`]: `${balance} ${symbol}`,
  };

  const additional = [];
  if (!isBurner && !isMinter) {
    additional.push("You don't have any roles");
  } else if (isBurner && !isMinter) {
    additional.push("You have the burner role");
  } else if (!isBurner && isMinter) {
    additional.push("You have the minter role");
  } else if (isBurner && isMinter) {
    additional.push("You have the minter and the burner roles");
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
