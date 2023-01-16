import React, { useContext } from "react";
import AboutProject from "../About/AboutProject";
import AboutAdmin from "../About/AboutAdmin";
import GoerliLogo from "../GoerliLogo";
import { LogoGrid, AboutGrid, AdminGrid } from "./Header.styled";
import { TokenContext } from "../../contexts/TokenContext";
import { Link } from "react-router-dom";

function Header() {
  const { isAdmin } = useContext(TokenContext);

  return (
    <>
      <AboutGrid>
        <AboutProject />
      </AboutGrid>
      <LogoGrid>
        <Link to="/">
          <GoerliLogo />
        </Link>
      </LogoGrid>
      {isAdmin ? (
        <AdminGrid>
          <AboutAdmin />
        </AdminGrid>
      ) : null}
    </>
  );
}

export default Header;
