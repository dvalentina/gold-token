import React from "react";
import useToken from "../../hooks/useToken";
import Card from ".";

function TokenCard() {
  const { name, decimals, totalSupply, symbol } = useToken();

  const data = {
    Name: name,
    Symbol: symbol,
    "Total supply": `${totalSupply} ${symbol}`,
    Decimals: decimals,
  };

  return <Card title="Token Info" data={data} />;
}

export default TokenCard;
