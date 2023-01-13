import React, { useState } from "react";
import { FORM } from "../../constants";
import {
  Container,
  StyledRadioButtons as RadioButtons,
} from "./FormSwitcher.styled";
import GrantRoleCard from "../Cards/GrantRoleCard";
import RevokeRoleCard from "../Cards/RevokeRoleCard";

function RolesFormSwitcher() {
  const [chosen, setChosen] = useState(FORM.GRANT);

  const options = [FORM.GRANT, FORM.REVOKE];

  const handleChoose = (event) => {
    if (event.target.value !== chosen) {
      setChosen(event.target.value);
    } else {
      return;
    }
  };

  function switchForms() {
    switch (chosen) {
      case FORM.GRANT:
        return <GrantRoleCard />;
      case FORM.REVOKE:
        return <RevokeRoleCard />;
      default:
        return <GrantRoleCard />;
    }
  }

  return (
    <Container>
      <RadioButtons chosen={chosen} options={options} onClick={handleChoose} />
      {switchForms()}
    </Container>
  );
}

export default RolesFormSwitcher;
