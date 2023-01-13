import React, { useContext } from "react";
import RoleForm from "../../components/Form/RoleForm";
import Card from "../../components/Card";
import { TokenContext } from "../../contexts/TokenContext";

function GrantRoleCard() {
  const { grantRole } = useContext(TokenContext);

  return (
    <Card>
      <RoleForm
        name="Grant"
        targetLabel="to"
        subtitle="roles"
        onSubmit={grantRole}
      />
    </Card>
  );
}

export default GrantRoleCard;
