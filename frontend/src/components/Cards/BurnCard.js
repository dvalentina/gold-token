import React, { useContext } from "react";
import { TokenContext } from "../../contexts/TokenContext";
import Card from "../Card";
import BurnForm from "../Forms/BurnForm";

function BurnCard() {
  const { isBurner } = useContext(TokenContext);

  return isBurner ? (
    <Card>
      <BurnForm />
    </Card>
  ) : null;
}

export default BurnCard;
