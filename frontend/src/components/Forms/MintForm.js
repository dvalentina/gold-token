import React, { useContext } from "react";
import { TokenContext } from "../../contexts/TokenContext";
import AmountForm from "../Form/AmountForm";

function MintForm() {
  const { mintTokens } = useContext(TokenContext);

  return <AmountForm onSubmit={mintTokens} name="mint" targetLabel="to" />;
}

export default MintForm;
