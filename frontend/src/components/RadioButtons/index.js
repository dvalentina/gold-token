import React from "react";
import { RadioGroup, RadioButton, Label } from "./RadioButtons.styled";

function RadioButtons({
  chosen,
  options,
  onClick,
  className,
  disabled,
  name,
  onReset,
}) {
  const buttons = options?.map((option) => (
    <Label key={option} checked={chosen === option} disabled={disabled}>
      <RadioButton
        id={option}
        type="radio"
        key={option}
        name={name}
        onChange={onClick}
        checked={chosen === option}
        value={option}
        disabled={disabled}
      />
      {option}
    </Label>
  ));

  return <RadioGroup className={className}>{buttons}</RadioGroup>;
}

export default RadioButtons;
