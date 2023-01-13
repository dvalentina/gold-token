import React, { useState, useContext, useEffect } from "react";
import { FORM, TX_STATUS } from "../../constants";
import BurnCard from "../Cards/BurnCard";
import MintCard from "../Cards/MintCard";
import TransferCard from "../Cards/TransferCard";
import {
  Container,
  StyledRadioButtons as RadioButtons,
} from "./FormSwitcher.styled";
import { TokenContext } from "../../contexts/TokenContext";

function AmountFormSwitcher() {
  const { isMinter, isBurner, txStatus } = useContext(TokenContext);
  const [chosen, setChosen] = useState(FORM.TRANSFER);

  const options = [FORM.TRANSFER];
  const ordinaryUser = !isBurner && !isMinter;

  useEffect(() => {
    setChosen(FORM.TRANSFER);
  }, [isMinter, isBurner]);

  if (isMinter) {
    options.push(FORM.MINT);
  }
  if (isBurner) {
    options.push(FORM.BURN);
  }

  const handleChoose = (event) => {
    if (event.target.value !== chosen) {
      setChosen(event.target.value);
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
          disabled={txStatus === TX_STATUS.IN_PROGRESS}
        />
      )}
      {switchForms()}
    </Container>
  );
}

export default AmountFormSwitcher;
