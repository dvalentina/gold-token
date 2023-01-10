import React, { useContext } from "react";
import { TokenContext } from "../../contexts/TokenContext";
import Form from "../Form";

function BurnForm() {
  const { burn, burnStatus } = useContext(TokenContext);

  return (
    <Form onSubmit={burn} status={burnStatus} name="burn" targetLabel="from" />
  );
}

export default BurnForm;
