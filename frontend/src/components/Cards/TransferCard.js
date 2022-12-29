import React from "react";
import Card from "../Card";
import TransferForm from "../Forms/TransferForm";

function TransferCard({ transfer, symbol }) {
  return (
    <Card>
      <TransferForm transferTokens={transfer} tokenSymbol={symbol} />
    </Card>
  );
}

export default TransferCard;
