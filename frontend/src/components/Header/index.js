import React from "react";
import About from "../About";
import GoerliLogo from "../GoerliLogo";
import { LogoGrid, AboutGrid } from "./Header.styled";

function Header() {
  return (
    <>
      <AboutGrid>
        <About />
      </AboutGrid>
      <LogoGrid>
        <GoerliLogo />
      </LogoGrid>
    </>
  );
}

export default Header;
