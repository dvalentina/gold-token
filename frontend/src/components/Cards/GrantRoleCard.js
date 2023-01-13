import React from "react";
import RoleForm from "../../components/Form/RoleForm";
import Card from "../../components/Card";

function GrantRoleCard() {
  return (
    <Card>
      <RoleForm name="Grant" targetLabel="to" subtitle="roles" />
    </Card>
  );
}

export default GrantRoleCard;
