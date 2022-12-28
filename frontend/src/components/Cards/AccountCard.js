import React, { useContext } from "react";
import { WalletContext } from "../../contexts/WalletContext";
import Card from "../Card";
import { shortenAddress } from "../../utils";
import Info from "../Info";

function AccountCard() {
  const { account, balance } = useContext(WalletContext);
  const data = {
    Account: shortenAddress(account),
    Balance: `${
      balance ? `${parseFloat(balance).toFixed(2)} GoerliETH` : "Loading..."
    }`,
  };

  return (
    <Card>
      <Info title="Account Info" data={data} />
    </Card>
  );
}

export default AccountCard;
