import React, { useContext } from "react";
import {
  AccountGrid,
  TokenGrid,
  LogoGrid,
  FormGrid,
  WalletGrid,
  TransactionGrid,
  AboutContainer,
  AboutGrid,
} from "./MainPage.styled";
import ConnectWallet from "../../components/ConnectWallet";
import TokenCard from "../../components/Cards/TokenCard";
import AccountCard from "../../components/Cards/AccountCard";
import { WalletContext } from "../../contexts/WalletContext";
import { GOERLI_CHAIN_ID } from "../../constants";
import GoerliLogo from "../../components/GoerliLogo";
import Grid from "../../components/Grid";
import FormSwitcher from "../../components/FormSwitcher";
import TransactionCard from "../../components/Cards/TransactionCard";
import About from "../../components/About";

function MainPage() {
  const { account, chainId } = useContext(WalletContext);

  return (
    <Grid>
      <LogoGrid>
        <GoerliLogo />
      </LogoGrid>
      <AboutGrid>
        <About />
      </AboutGrid>
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
          <TransactionGrid>
            <TransactionCard />
          </TransactionGrid>
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
