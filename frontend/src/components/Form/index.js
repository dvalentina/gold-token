import React, { useContext } from "react";
import {
  Title,
  Label,
  Form as StyledForm,
  FormElement,
  Input,
  Subtitle,
} from "../Form/Form.styled";
import Button from "../Button";
import useEllipsis from "../../hooks/useEllipsis";
import { EMOJI, TX_STATUS } from "../../constants";
import { firstToUpperCase } from "../../utils";
import { TokenContext } from "../../contexts/TokenContext";

function Form({ firstInput, handleSubmit, name, subtitle, targetLabel, long }) {
  const { ellipsis } = useEllipsis();
  const { txStatus } = useContext(TokenContext);

  function getButtonText() {
    const button = firstToUpperCase(name);
    let buttonProcess = button;
    if (button.slice(-1) === "e") {
      buttonProcess = button.slice(0, -1);
    }

    switch (txStatus) {
      case TX_STATUS.IN_PROGRESS:
        return `${buttonProcess}ing`;
      case TX_STATUS.SUCCESS:
        return `${buttonProcess}ed! ${EMOJI.SUCCESS}`;
      case TX_STATUS.ERROR:
        return `Error ${EMOJI.ERROR}`;
      case TX_STATUS.WALLET:
        return `Go to your wallet ${EMOJI.NEUTRAL}`;
      default:
        return `${button}`;
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>
        {firstToUpperCase(name)}
        {subtitle && !long ? (
          <span style={{ fontWeight: "500" }}> {subtitle}</span>
        ) : null}
      </Title>
      {subtitle && long ? <Subtitle>{subtitle}</Subtitle> : null}
      {firstInput}
      <FormElement>
        <Label>{firstToUpperCase(targetLabel)} address</Label>
        <Input
          type="text"
          name={targetLabel}
          placeholder="0x0000..."
          required
        />
      </FormElement>
      <Button primary type="submit" disabled={txStatus}>
        <span style={{ position: "relative" }}>
          {getButtonText()}
          {txStatus === TX_STATUS.IN_PROGRESS ? (
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
