import React, { useContext } from "react";
import { WalletContext } from "../../contexts/WalletContext";
import Card from ".";
import { shortenAddress } from "../../utils";

function AccountCard() {
  const { account, balance } = useContext(WalletContext);
  const data = {
    Account: shortenAddress(account),
    Balance: `${
      balance ? `${parseFloat(balance).toFixed(2)} GoerliETH` : "Loading..."
    }`,
  };

  return <Card title="Account Info" data={data} />;
}

export default AccountCard;
