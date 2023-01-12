import React, { useContext } from "react";
import { TokenContext } from "../../contexts/TokenContext";
import AmountForm from "../Form/AmountForm";

function BurnForm() {
  const { burn, burnStatus } = useContext(TokenContext);

  return (
    <AmountForm
      onSubmit={burn}
      status={burnStatus}
      name="burn"
      targetLabel="from"
    />
  );
}

export default BurnForm;
