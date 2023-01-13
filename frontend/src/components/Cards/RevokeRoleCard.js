import React, { useContext } from "react";
import RoleForm from "../../components/Form/RoleForm";
import Card from "../../components/Card";
import { TokenContext } from "../../contexts/TokenContext";

function RevokeRoleCard() {
  const { revokeRole } = useContext(TokenContext);

  return (
    <Card>
      <RoleForm
        name="Revoke"
        targetLabel="from"
        subtitle="roles"
        onSubmit={revokeRole}
      />
    </Card>
  );
}

export default RevokeRoleCard;
