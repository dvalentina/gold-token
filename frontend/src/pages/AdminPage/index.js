import React from "react";
import RolesFormSwitcher from "../../components/FormSwitcher/RoleFormSwitcher";
import Layout from "../../components/Layout";
import { FormGrid } from "./AdminPage.styled";

function AdminPage() {
  return (
    <Layout>
      <FormGrid>
        <RolesFormSwitcher />
      </FormGrid>
    </Layout>
  );
}

export default AdminPage;
