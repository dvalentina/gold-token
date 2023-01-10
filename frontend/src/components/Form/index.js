import React, { useContext } from "react";
import {
  Title,
  Label,
  Form as StyledForm,
  FormElement,
  Input,
} from "../Form/Form.styled";
import Button from "../Button";
import { TokenContext } from "../../contexts/TokenContext";
import { Skeleton } from "@mui/material";
import useEllipsis from "../../hooks/useEllipsis";
import { EMOJI, TX_STATUS } from "../../constants";
import { firstToUpperCase } from "../../utils";

function Form({ onSubmit, status, buttonText, title, subtitle, targetLabel }) {
  const { symbol } = useContext(TokenContext);
  const { ellipsis } = useEllipsis();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const targetAddress = formData.get(targetLabel);
    const amount = formData.get("amount");

    if (targetAddress && amount) {
      onSubmit(targetAddress, amount);
    }
  };

  function getButtonText() {
    const action = firstToUpperCase(buttonText);

    switch (status) {
      case TX_STATUS.IN_PROGRESS:
        return `${action}ing`;
      case TX_STATUS.SUCCESS:
        return `${action}ed! ${EMOJI.SUCCESS}`;
      case TX_STATUS.ERROR:
        return `Error ${EMOJI.ERROR}`;
      case TX_STATUS.WALLET:
        return `Go to your wallet ${EMOJI.NEUTRAL}`;
      default:
        return `${action}`;
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>
        {title}
        {subtitle ? (
          <span style={{ fontWeight: "500" }}> {subtitle}</span>
        ) : null}
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
        <Label>{firstToUpperCase(targetLabel)} address</Label>
        <Input
          className="form-control"
          type="text"
          name={targetLabel}
          required
        />
      </FormElement>
      <Button primary type="submit" disabled={status}>
        <span style={{ position: "relative" }}>
          {getButtonText()}
          {status === TX_STATUS.IN_PROGRESS ? (
            <span style={{ position: "absolute" }}>{ellipsis}</span>
          ) : (
            ""
          )}
        </span>
      </Button>
      <Button type="reset">Reset</Button>
    </StyledForm>
  );
}

export default Form;
