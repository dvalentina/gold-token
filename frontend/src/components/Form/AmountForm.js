import React, { useContext } from "react";
import { Label, FormElement, Input } from "../Form/Form.styled";
import { TokenContext } from "../../contexts/TokenContext";
import { Skeleton } from "@mui/material";
import Form from ".";

function AmountForm({ onSubmit, name, subtitle, targetLabel, long }) {
  const { symbol } = useContext(TokenContext);

  const amountInput = (
    <FormElement>
      {symbol ? (
        <Label>Amount of {symbol}</Label>
      ) : (
        <Skeleton variant="text" sx={{ fontSize: "16px" }} />
      )}
      <Input
        type="number"
        step="0.01"
        name="amount"
        placeholder="1.00"
        required
      />
    </FormElement>
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const targetAddress = formData.get(targetLabel);
    const amount = formData.get("amount");

    if (targetAddress && amount) {
      onSubmit(targetAddress, amount);
    }
  };

  return (
    <Form
      firstInput={amountInput}
      handleSubmit={handleSubmit}
      name={name}
      subtitle={subtitle}
      targetLabel={targetLabel}
      long={long}
    />
  );
}

export default AmountForm;
