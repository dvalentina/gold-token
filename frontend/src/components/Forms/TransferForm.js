import React, { useContext } from "react";
import { Title, Label, Form, FormElement, Input } from "./Form.styled";
import Button from "../Button";
import { WalletContext } from "../../contexts/WalletContext";
import { shortenAddress } from "../../utils";

function TransferForm({ transferTokens, tokenSymbol }) {
  const { account } = useContext(WalletContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const to = formData.get("to");
    const amount = formData.get("amount");

    if (to && amount) {
      transferTokens(to, amount);
    }
  };

  return (
    <>
      <Title>
        Transfer{" "}
        <span style={{ fontWeight: 500 }}>from {shortenAddress(account)}</span>
      </Title>
      <Form onSubmit={handleSubmit}>
        <FormElement>
          <Label>Amount of {tokenSymbol}</Label>
          <Input
            className="form-control"
            type="number"
            step="1"
            name="amount"
            placeholder="1"
            required
          />
        </FormElement>
        <FormElement className="form-group">
          <Label>Recipient address</Label>
          <Input className="form-control" type="text" name="to" required />
        </FormElement>
        <Button color="black" type="submit">
          Transfer
        </Button>
      </Form>
    </>
  );
}

export default TransferForm;
