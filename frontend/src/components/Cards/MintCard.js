import React, { useContext } from "react";
import { TokenContext } from "../../contexts/TokenContext";
import Card from "../Card";
import MintForm from "../Forms/MintForm";

function MintCard() {
  const { isMinter } = useContext(TokenContext);

  return isMinter ? (
    <Card>
      <MintForm />
    </Card>
  ) : null;
}

export default MintCard;
