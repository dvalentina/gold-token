import React, { useContext } from "react";
import { TokenContext } from "../../contexts/TokenContext";
import AmountForm from "../Form/AmountForm";

function BurnForm() {
  const { burnTokens } = useContext(TokenContext);

  return <AmountForm onSubmit={burnTokens} name="burn" targetLabel="from" />;
}

export default BurnForm;
