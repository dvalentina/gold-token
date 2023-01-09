import React from "react";
import NoWalletCard from "../../components/Cards/NoWalletCard";
import Grid from "../../components/Grid";
import { CardGrid } from "./NoWalletPage.styled";

function NoWalletPage() {
  return (
    <Grid>
      <CardGrid>
        <NoWalletCard />
      </CardGrid>
    </Grid>
  );
}

export default NoWalletPage;
