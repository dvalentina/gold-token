import React from "react";
import NoWalletCard from "../../components/Cards/NoWalletCard";
import Layout from "../../components/Layout";
import { CardGrid } from "./NoWalletPage.styled";

function NoWalletPage() {
  return (
    <Layout>
      <CardGrid>
        <NoWalletCard />
      </CardGrid>
    </Layout>
  );
}

export default NoWalletPage;
