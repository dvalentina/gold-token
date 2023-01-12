import React, { useContext } from "react";
import { TokenContext } from "../../contexts/TokenContext";
import AmountForm from "../Form/AmountForm";

function MintForm() {
  const { mint, mintStatus } = useContext(TokenContext);

  return (
    <AmountForm
      onSubmit={mint}
      status={mintStatus}
      name="mint"
      targetLabel="to"
    />
  );
}

export default MintForm;
