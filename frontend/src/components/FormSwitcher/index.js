import React, { useState, useContext } from "react";
import { FORM } from "../../constants";
import BurnCard from "../Cards/BurnCard";
import MintCard from "../Cards/MintCard";
import TransferCard from "../Cards/TransferCard";
import {
  Container,
  StyledRadioButtons as RadioButtons,
} from "./FormSwitcher.styled";
import { TokenContext } from "../../contexts/TokenContext";

function FormSwitcher() {
  const { isMinter, isBurner } = useContext(TokenContext);
  const [chosen, setChosen] = useState(FORM.TRANSFER);

  const options = [FORM.TRANSFER];
  const ordinaryUser = !isBurner && !isMinter;

  if (isMinter) {
    options.push(FORM.MINT);
  }
  if (isBurner) {
    options.push(FORM.BURN);
  }

  const handleChoose = (event) => {
    if (event.target.name !== chosen) {
      setChosen(event.target.name);
    } else {
      return;
    }
  };

  function switchForms() {
    switch (chosen) {
      case FORM.TRANSFER:
        return <TransferCard />;
      case FORM.MINT:
        return <MintCard />;
      case FORM.BURN:
        return <BurnCard />;
      default:
        return <TransferCard />;
    }
  }

  return (
    <Container>
      {ordinaryUser ? null : (
        <RadioButtons
          chosen={chosen}
          options={options}
          onClick={handleChoose}
        />
      )}
      {switchForms()}
    </Container>
  );
}

export default FormSwitcher;
