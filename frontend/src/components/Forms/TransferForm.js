import React, { useContext } from "react";
import { WalletContext } from "../../contexts/WalletContext";
import { shortenAddress } from "../../utils";
import { TokenContext } from "../../contexts/TokenContext";
import Form from "../Form";

function TransferForm() {
  const { account } = useContext(WalletContext);
  const { transfer, transferStatus } = useContext(TokenContext);

  return (
    <Form
      onSubmit={transfer}
      status={transferStatus}
      buttonText="transfer"
      title="Transfer"
      subtitle={`from ${shortenAddress(account)}`}
      targetLabel="to"
    />
  );
}

export default TransferForm;
