import React from "react";
import AboutProject from "../About/AboutProject";
import AboutAdmin from "../About/AboutAdmin";
import GoerliLogo from "../GoerliLogo";
import { LogoGrid, AboutGrid, AdminGrid } from "./Header.styled";

function Header() {
  return (
    <>
      <AboutGrid>
        <AboutProject />
      </AboutGrid>
      <LogoGrid>
        <GoerliLogo />
      </LogoGrid>
      <AdminGrid>
        <AboutAdmin />
      </AdminGrid>
    </>
  );
}

export default Header;
