import React, { useContext } from "react";
import { TokenContext } from "../../contexts/TokenContext";
import AmountForm from "../Form/AmountForm";

function BurnForm() {
  const { burn } = useContext(TokenContext);

  return <AmountForm onSubmit={burn} name="burn" targetLabel="from" />;
}

export default BurnForm;
