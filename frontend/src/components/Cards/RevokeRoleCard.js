import React from "react";
import RoleForm from "../../components/Form/RoleForm";
import Card from "../../components/Card";

function RevokeRoleCard() {
  return (
    <Card>
      <RoleForm name="Revoke" targetLabel="from" />
    </Card>
  );
}

export default RevokeRoleCard;
