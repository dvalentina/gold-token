import React, { useContext } from "react";
import { Title, Label, Form, FormElement, Input } from "./Form.styled";
import Button from "../Button";
import { WalletContext } from "../../contexts/WalletContext";
import { shortenAddress } from "../../utils";
import { TokenContext } from "../../contexts/TokenContext";
import { Skeleton } from "@mui/material";
import useEllipsis from "../../hooks/useEllipsis";
import { EMOJI, TX_STATUS } from "../../constants";

function TransferForm() {
  const { account } = useContext(WalletContext);
  const { symbol, transfer, txStatus } = useContext(TokenContext);
  const { ellipsis } = useEllipsis();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const to = formData.get("to");
    const amount = formData.get("amount");

    if (to && amount) {
      transfer(to, amount);
    }
  };

  function buttonText() {
    switch (txStatus) {
      case TX_STATUS.IN_PROGRESS:
        return "Transfering";
      case TX_STATUS.SUCCESS:
        return `Transfered! ${EMOJI.SUCCESS}`;
      case TX_STATUS.ERROR:
        return `Error ${EMOJI.ERROR}`;
      case TX_STATUS.WALLET:
        return `Go to your wallet ${EMOJI.NEUTRAL}`;
      default:
        return "Transfer";
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Title>
        Transfer{" "}
        <span style={{ fontWeight: "500" }}>
          from {shortenAddress(account)}
        </span>
      </Title>
      <FormElement>
        {symbol ? (
          <Label>Amount of {symbol}</Label>
        ) : (
          <Skeleton variant="text" sx={{ fontSize: "16px" }} />
        )}
        <Input
          className="form-control"
          type="number"
          step="0.01"
          name="amount"
          placeholder="1.00"
          required
        />
      </FormElement>
      <FormElement className="form-group">
        <Label>Recipient address</Label>
        <Input className="form-control" type="text" name="to" required />
      </FormElement>
      <Button primary type="submit" disabled={txStatus}>
        <span style={{ position: "relative" }}>
          {buttonText()}
          {txStatus === TX_STATUS.IN_PROGRESS ? (
            <span style={{ position: "absolute" }}>{ellipsis}</span>
          ) : (
            ""
          )}
        </span>
      </Button>
      <Button type="reset">Reset</Button>
    </Form>
  );
}

export default TransferForm;
