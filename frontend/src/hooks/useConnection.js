import { useState, useEffect } from "react";
// import { ethers } from "ethers";

// const provider = new ethers.providers.Web3Provider(window.ethereum);

const useConnection = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);

  async function connect() {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(handleAccountsChanged)
        .catch((err) => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            console.log("Please connect to MetaMask.");
          } else {
            console.error(err);
          }
        });
    }
  }

  function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      setAccount(null);
      setBalance(null);
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== account) {
      setAccount(accounts[0]);
      getBalance();
      // Do any other work!
    }
  }

  useEffect(() => {
    window.ethereum
      .request({ method: "eth_accounts" })
      .then(handleAccountsChanged)
      .catch((err) => {
        // Some unexpected error.
        // For backwards compatibility reasons, if no accounts are available,
        // eth_accounts will return an empty array.
        console.error(err);
      });
  }, []);

  async function getBalance() {
    if (account) {
      window.ethereum
        .request({
          method: "eth_getBalance",
          params: [account, "latest"],
        })
        .then((balance) => setBalance(balance))
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleChainChanged(_chainId) {
    // We recommend reloading the page, unless you must do otherwise
    window.location.reload();
  }

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleChainChanged);
    }
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
        window.ethereum.removeListener("chainChanged", handleChainChanged);
      }
    };
  }, []);

  useEffect(() => {
    if (account) {
      getBalance();
    }
  }, [account]);

  return {
    account,
    balance,
    connect,
  };
};
export default useConnection;
