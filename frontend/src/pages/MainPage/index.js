import React, { useContext } from "react";
import {
  AccountGrid,
  TokenGrid,
  FormGrid,
  WalletGrid,
  TransactionGrid,
} from "./MainPage.styled";
import ConnectWallet from "../../components/ConnectWallet";
import TokenCard from "../../components/Cards/TokenCard";
import AccountCard from "../../components/Cards/AccountCard";
import { WalletContext } from "../../contexts/WalletContext";
import { GOERLI_CHAIN_ID } from "../../constants";
import Layout from "../../components/Layout";
import FormSwitcher from "../../components/FormSwitcher";
import TransactionCard from "../../components/Cards/TransactionCard";

function MainPage() {
  const { account, chainId } = useContext(WalletContext);

  return (
    <Layout>
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
    </Layout>
  );
}

export default MainPage;
