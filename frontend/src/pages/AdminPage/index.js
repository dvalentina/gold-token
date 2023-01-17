import React from "react";
import RolesFormSwitcher from "../../components/FormSwitcher/RoleFormSwitcher";
import Layout from "../../components/Layout";
import { FormGrid, TransactionGrid, BackGrid } from "./AdminPage.styled";
import TransactionCard from "../../components/Cards/TransactionCard";
import Back from "../../components/Back";

function AdminPage() {
  return (
    <Layout>
      <BackGrid>
        <Back />
      </BackGrid>
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
