import React from "react";
import Button from "../Button";
import { RadioGroup } from "./RadioButtons.styled";

function RadioButtons({ chosen, options, onClick, className }) {
  const buttons = options?.map((option) => (
    <Button
      key={String(option)}
      name={String(option)}
      onClick={onClick}
      disabled={chosen === String(option)}
      primary={chosen === String(option)}
      small
    >
      {option}
    </Button>
  ));

  return <RadioGroup className={className}>{buttons}</RadioGroup>;
}

export default RadioButtons;
