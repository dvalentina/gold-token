import React from "react";
import Header from "../Header";
import { Container, HeaderGrid, BodyGrid, Grid } from "./Layout.styled";

function Layout({ children }) {
  return (
    <Container>
      <HeaderGrid>
        <Grid>
          <Header />
        </Grid>
      </HeaderGrid>
      <BodyGrid>
        <Grid>{children}</Grid>
      </BodyGrid>
    </Container>
  );
}

export default Layout;
