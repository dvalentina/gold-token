import React, { useContext } from "react";
import {
  AccountGrid,
  TokenGrid,
  LogoGrid,
  TransferGrid,
  WalletGrid,
  MintGrid,
} from "./MainPage.styled";
import ConnectWallet from "../../components/ConnectWallet";
import TokenCard from "../../components/Cards/TokenCard";
import AccountCard from "../../components/Cards/AccountCard";
import { WalletContext } from "../../contexts/WalletContext";
import { GOERLI_CHAIN_ID } from "../../constants";
import GoerliLogo from "../../components/GoerliLogo";
import TransferCard from "../../components/Cards/TransferCard";
import Grid from "../../components/Grid";
import MintCard from "../../components/Cards/MintCard";

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
          <TransferGrid>
            <TransferCard />
          </TransferGrid>
          {/* <MintGrid>
            <MintCard />
          </MintGrid> */}
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
