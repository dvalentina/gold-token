import React from "react";
import RolesFormSwitcher from "../../components/FormSwitcher/RoleFormSwitcher";
import Layout from "../../components/Layout";
import { FormGrid, TransactionGrid } from "./AdminPage.styled";
import TransactionCard from "../../components/Cards/TransactionCard";

function AdminPage() {
  return (
    <Layout>
      <FormGrid>
        <RolesFormSwitcher />
      </FormGrid>
      <TransactionGrid>
        <TransactionCard />
      </TransactionGrid>
    </Layout>
  );
}

export default AdminPage;
