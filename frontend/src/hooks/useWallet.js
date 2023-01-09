import { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import { GOERLI_CHAIN_ID } from "../constants";
import { toHex } from "../utils";
import { ToastContext, ADD } from "../contexts/ToastContext";

const useWallet = () => {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const { toastDispatch } = useContext(ToastContext);

  async function connect() {
    if (window.ethereum) {
      setDisabled(true);

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          handleAccountsChanged(accounts);
        })
        .catch((err) => {
          if (err.code === 4001) {
            console.log("Please connect to MetaMask.");
          } else {
            console.error(err);
            toastDispatch({
              type: ADD,
              payload: {
                content: err,
                status: "error",
              },
            });
          }
        })
        .finally(() => {
          setDisabled(false);
        });
    }
  }

  function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      setAccount(null);
      setBalance(null);
      setChainId(null);
      console.log("Please connect to MetaMask.");
    } else if (accounts[0] !== account) {
      setAccount(accounts[0]);
      getBalance();
      // getChainId();
    }
  }

  useEffect(() => {
    window.ethereum
      .request({ method: "eth_accounts" })
      .then((accounts) => {
        handleAccountsChanged(accounts);
      })
      .then(getChainId)
      .catch((err) => {
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
        .then((balance) => setBalance(ethers.utils.formatEther(balance)))
        .catch((err) => {
          console.log(err);
          toastDispatch({
            type: ADD,
            payload: {
              content: err,
              status: "error",
            },
          });
        });
    }
  }

  async function getChainId() {
    if (account) {
      window.ethereum
        .request({
          method: "eth_chainId",
        })
        .then((chain) => setChainId(chain))
        .catch((err) => console.log(err));
    }
  }

  function handleChainChanged(chainId) {
    setChainId(chainId);
  }

  async function switchChain() {
    setDisabled(true);

    window.ethereum
      .request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(GOERLI_CHAIN_ID) }],
      })
      .then(() => getChainId())
      .catch((err) => console.log(err))
      .finally(() => setDisabled(false));
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
  }, [account, chainId]);

  useEffect(() => {
    getChainId();
  }, [account]);

  return {
    account,
    balance,
    connect,
    chainId,
    switchChain,
    disabled,
  };
};

export default useWallet;
