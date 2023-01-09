import React, { useContext } from "react";
import { Title, Label, Form, FormElement, Input } from "./Form.styled";
import Button from "../Button";
import { TokenContext } from "../../contexts/TokenContext";
import { Skeleton } from "@mui/material";
import useEllipsis from "../../hooks/useEllipsis";
import { EMOJI, TX_STATUS } from "../../constants";

function MintForm() {
  const { symbol, mint, mintStatus } = useContext(TokenContext);
  const { ellipsis } = useEllipsis();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const to = formData.get("to");
    const amount = formData.get("amount");

    if (to && amount) {
      mint(to, amount);
    }
  };

  function buttonText() {
    switch (mintStatus) {
      case TX_STATUS.IN_PROGRESS:
        return "Minting";
      case TX_STATUS.SUCCESS:
        return `Minted! ${EMOJI.SUCCESS}`;
      case TX_STATUS.ERROR:
        return `Error ${EMOJI.ERROR}`;
      case TX_STATUS.WALLET:
        return `Go to your wallet ${EMOJI.NEUTRAL}`;
      default:
        return "Mint";
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Mint</Title>
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
      <Button primary type="submit" disabled={mintStatus}>
        <span style={{ position: "relative" }}>
          {buttonText()}
          {mintStatus === TX_STATUS.IN_PROGRESS ? (
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

export default MintForm;
