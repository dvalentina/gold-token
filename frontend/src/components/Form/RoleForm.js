import React, { useState, useContext } from "react";
import { FormElement, Label } from "../Form/Form.styled";
import Form from ".";
import RadioButtons from "../RadioButtons";
import { TokenContext } from "../../contexts/TokenContext";

function RoleForm({ onSubmit, name, subtitle, targetLabel, long }) {
  const { roles } = useContext(TokenContext);

  const [chosen, setChosen] = useState(Object.keys(roles)[0]);
  const options = Object.keys(roles);
  console.log(chosen);

  const handleChoose = (event) => {
    if (event.target.value !== chosen) {
      setChosen(event.target.value);
    } else {
      return;
    }
  };

  const amountInput = (
    <FormElement>
      <Label>Role</Label>
      <RadioButtons
        name="role"
        options={options}
        chosen={chosen}
        onClick={handleChoose}
      />
    </FormElement>
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const targetAddress = formData.get(targetLabel);
    const role = roles[chosen];

    if (targetAddress && role) {
      onSubmit(role, targetAddress);
    }
  };

  return (
    <Form
      firstInput={amountInput}
      handleSubmit={handleSubmit}
      name={name}
      subtitle={subtitle}
      targetLabel={targetLabel}
      long={long}
    />
  );
}

export default RoleForm;
