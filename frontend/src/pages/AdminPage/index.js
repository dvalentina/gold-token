import React from "react";
import GrantRoleCard from "../../components/Cards/GrantRoleCard";
import RevokeRoleCard from "../../components/Cards/RevokeRoleCard";
import Layout from "../../components/Layout";
import { GrantGrid, RevokeGrid } from "./AdminPage.styled";

function AdminPage() {
  return (
    <Layout>
      <GrantGrid>
        <GrantRoleCard />
      </GrantGrid>
      <RevokeGrid>
        <RevokeRoleCard />
      </RevokeGrid>
    </Layout>
  );
}

export default AdminPage;
