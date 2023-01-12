import React from "react";
import { RadioGroup, RadioButton, Label } from "./RadioButtons.styled";

function RadioButtons({ chosen, options, onClick, className, disabled, name }) {
  const buttons = options?.map((option) => (
    <Label>
      <RadioButton
        type="radio"
        key={String(option)}
        name={name}
        onClick={onClick}
        checked={chosen === String(option)}
        value={option}
        disabled={disabled}
      />
      {option}
    </Label>
  ));

  return <RadioGroup className={className}>{buttons}</RadioGroup>;
}

export default RadioButtons;
