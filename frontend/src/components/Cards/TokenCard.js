import React, { useContext } from "react";
import Card from "../Card";
import { WalletContext } from "../../contexts/WalletContext";
import { TokenContext } from "../../contexts/TokenContext";
import { shortenAddress } from "../../utils";
import Info from "../Info";

function TokenCard() {
  const { account } = useContext(WalletContext);
  const { name, decimals, totalSupply, symbol, balance } =
    useContext(TokenContext);

  const data = {
    Name: name,
    Symbol: symbol,
    "Total supply": `${totalSupply} ${symbol}`,
    Decimals: decimals,
    [`Balance (${shortenAddress(account)})`]: `${balance} ${symbol}`,
  };

  return (
    <Card>
      <Info title="Token Info" data={data} />
    </Card>
  );
}

export default TokenCard;
