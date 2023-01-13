import React, { useContext } from "react";
import { WalletContext } from "../../contexts/WalletContext";
import { shortenAddress } from "../../utils";
import { TokenContext } from "../../contexts/TokenContext";
import AmountForm from "../Form/AmountForm";

function TransferForm() {
  const { account } = useContext(WalletContext);
  const { transferTokens, isMinter, isBurner } = useContext(TokenContext);

  return (
    <AmountForm
      onSubmit={transferTokens}
      name="transfer"
      subtitle={`from ${shortenAddress(account)}`}
      targetLabel="to"
      long={!isMinter && !isBurner}
    />
  );
}

export default TransferForm;
