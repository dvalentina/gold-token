import React, { useContext } from "react";
import useToken from "../../hooks/useToken";
import Card from "../Card";
import { WalletContext } from "../../contexts/WalletContext";
import { shortenAddress } from "../../utils";
import TransferCard from "./TransferCard";
import Info from "../Info";

function TokenCard() {
  const { account } = useContext(WalletContext);
  const { name, decimals, totalSupply, symbol, balance, transfer } = useToken({
    account,
  });

  const data = {
    Name: name,
    Symbol: symbol,
    "Total supply": `${totalSupply} ${symbol}`,
    Decimals: decimals,
    [`Balance (${shortenAddress(account)})`]: `${balance} ${symbol}`,
  };

  return (
    <>
      <Card>
        <Info title="Token Info" data={data} />
      </Card>
      <TransferCard transfer={transfer} symbol={symbol} />
    </>
  );
}

export default TokenCard;
