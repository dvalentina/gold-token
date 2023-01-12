import React, { useState } from "react";
import { FormElement, Label } from "../Form/Form.styled";
import Form from ".";
import RadioButtons from "../RadioButtons";
import { ROLE } from "../../constants";

function RoleForm({ onSubmit, status, name, subtitle, targetLabel, long }) {
  const [chosen, setChosen] = useState(Object.keys(ROLE)[0]);
  const options = Object.keys(ROLE);

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
      <RadioButtons options={options} chosen={chosen} onClick={handleChoose} />
    </FormElement>
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const targetAddress = formData.get(targetLabel);
    const role = ROLE[chosen];

    if (targetAddress && role) {
      onSubmit(targetAddress, role);
    }
  };

  return (
    <Form
      firstInput={amountInput}
      handleSubmit={handleSubmit}
      status={status}
      name={name}
      subtitle={subtitle}
      targetLabel={targetLabel}
      long={long}
    />
  );
}

export default RoleForm;
