import React from "react";
import GrantRoleCard from "../../components/Cards/GrantRoleCard";
import RevokeRoleCard from "../../components/Cards/RevokeRoleCard";
import Grid from "../../components/Grid";
import { GrantGrid, RevokeGrid } from "./AdminPage.styled";

function AdminPage() {
  return (
    <Grid>
      <GrantGrid>
        <GrantRoleCard />
      </GrantGrid>
      <RevokeGrid>
        <RevokeRoleCard />
      </RevokeGrid>
    </Grid>
  );
}

export default AdminPage;
