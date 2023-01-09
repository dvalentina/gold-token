import React, { useContext } from "react";
import {
  AccountGrid,
  TokenGrid,
  LogoGrid,
  TransferGrid,
  WalletGrid,
} from "./MainPage.styled";
import ConnectWallet from "../../components/ConnectWallet";
import TokenCard from "../../components/Cards/TokenCard";
import AccountCard from "../../components/Cards/AccountCard";
import { WalletContext } from "../../contexts/WalletContext";
import { GOERLI_CHAIN_ID } from "../../constants";
import GoerliLogo from "../../components/GoerliLogo";
import TransferCard from "../../components/Cards/TransferCard";
import Grid from "../../components/Grid";
// import { ToastContext, ADD } from "../../contexts/ToastContext";

function MainPage() {
  const { account, chainId } = useContext(WalletContext);
  // const { toastDispatch } = useContext(ToastContext);

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
        </>
      ) : (
        <WalletGrid>
          <ConnectWallet />
        </WalletGrid>
      )}
      {/* <button
        onClick={() => {
          toastDispatch({
            type: ADD,
            payload: {
              content: "Hello World",
              status: "success",
            },
          });
        }}
      >
        notif
      </button> */}
    </Grid>
  );
}

export default MainPage;
