import React, { useContext } from "react";
import {
  Container,
  AccountGrid,
  TokenGrid,
  LogoGrid,
  TransferGrid,
  WalletGrid,
} from "./MainPage.styled";
import ConnectWallet from "../ConnectWallet";
import TokenCard from "../Cards/TokenCard";
import AccountCard from "../Cards/AccountCard";
import { WalletContext } from "../../contexts/WalletContext";
import { GOERLI_CHAIN_ID } from "../../constants";
import GoerliLogo from "../GoerliLogo";
import TransferCard from "../Cards/TransferCard";

function MainPage() {
  const { account, chainId } = useContext(WalletContext);

  return (
    <Container>
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
          <TransferGrid>
            <TransferCard />
          </TransferGrid>
        </>
      ) : (
        <WalletGrid>
          <ConnectWallet />
        </WalletGrid>
      )}
    </Container>
  );
}

export default MainPage;
