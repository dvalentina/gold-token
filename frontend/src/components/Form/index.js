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

function Form({
  firstInput,
  handleSubmit,
  status,
  name,
  subtitle,
  targetLabel,
  long,
}) {
  const { ellipsis } = useEllipsis();

  function getButtonText() {
    const action = firstToUpperCase(name);

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
        {firstToUpperCase(name)}
        {subtitle && !long ? (
          <span style={{ fontWeight: "500" }}> {subtitle}</span>
        ) : null}
      </Title>
      {subtitle && long ? <Subtitle>{subtitle}</Subtitle> : null}
      {firstInput}
      <FormElement>
        <Label>{firstToUpperCase(targetLabel)} address</Label>
        <Input type="text" name={targetLabel} required />
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
