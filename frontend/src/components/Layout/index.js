import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import {
  Container,
  HeaderGrid,
  BodyGrid,
  Grid,
  FooterGrid,
} from "./Layout.styled";

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
      <FooterGrid>
        <Footer />
      </FooterGrid>
    </Container>
  );
}

export default Layout;
