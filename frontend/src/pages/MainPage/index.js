import React, { useContext } from "react";
import {
  AccountGrid,
  TokenGrid,
  LogoGrid,
  FormGrid,
  WalletGrid,
} from "./MainPage.styled";
import ConnectWallet from "../../components/ConnectWallet";
import TokenCard from "../../components/Cards/TokenCard";
import AccountCard from "../../components/Cards/AccountCard";
import { WalletContext } from "../../contexts/WalletContext";
import { GOERLI_CHAIN_ID } from "../../constants";
import GoerliLogo from "../../components/GoerliLogo";
import Grid from "../../components/Grid";
import FormSwitcher from "../../components/FormSwitcher";

function MainPage() {
  const { account, chainId } = useContext(WalletContext);

  return (
    <Grid>
      <LogoGrid>
        <GoerliLogo />
      </LogoGrid>
      {account && chainId === GOERLI_CHAIN_ID ? (
        <>
          <AccountGrid>
            <AccountCard />
          </AccountGrid>
          <TokenGrid>
            <TokenCard />
          </TokenGrid>
          <FormGrid>
            <FormSwitcher />
          </FormGrid>
        </>
      ) : (
        <WalletGrid>
          <ConnectWallet />
        </WalletGrid>
      )}
    </Grid>
  );
}

export default MainPage;
