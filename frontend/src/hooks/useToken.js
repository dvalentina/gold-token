import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { GLD_TOKEN_ADDRESS } from "../constants";
import GLDTokenAbi from "../abi/GLDTokenAbi.json";

const useToken = ({ account }) => {
  const [name, setName] = useState(null);
  const [decimals, setDecimals] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [totalSupply, setTotalSupply] = useState(null);
  const [balance, setBalance] = useState(null);

  const [txBeingSent, setTxBeingSent] = useState(null);
  const [txError, setTxError] = useState(null);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const token = new ethers.Contract(GLD_TOKEN_ADDRESS, GLDTokenAbi, signer);

  function getName() {
    token
      .name()
      .then((res) => setName(res))
      .catch((err) => console.log(err));
  }

  function getDecimals() {
    token
      .decimals()
      .then((res) => setDecimals(res))
      .catch((err) => console.log(err));
  }

  function getSymbol() {
    token
      .symbol()
      .then((res) => setSymbol(res))
      .catch((err) => console.log(err));
  }

  function getTotalSupply() {
    token
      .totalSupply()
      .then((res) => {
        const supplyNum = Number(ethers.utils.formatEther(res));
        setTotalSupply(supplyNum.toFixed(2));
      })
      .catch((err) => console.log(err));
  }

  function getBalance() {
    token
      .balanceOf(account)
      .then((res) => {
        const tokenNum = Number(ethers.utils.formatEther(res));
        setBalance(tokenNum.toFixed(2));
      })
      .catch((err) => console.log(err));
  }

  function transfer(to, amount) {
    setTxError(null);
    token
      .transfer(to, ethers.utils.parseUnits(amount))
      .then((tx) => {
        setTxBeingSent(tx.hash);
        return tx.wait();
      })
      .then((receipt) => {
        if (receipt.status === 0) {
          throw new Error("Transaction failed");
        }
        // update users balance?
      })
      .catch((error) => {
        if (error.code === 4001) {
          // Transaction is rejected by user
          return;
        }

        console.error(error);
        setTxError(error);
      })
      .finally(() => {
        setTxBeingSent(null);
        getBalance();
      });
  }

  function getTokenInfo() {
    getName();
    getDecimals();
    getSymbol();
    getTotalSupply();
    getBalance();
  }

  useEffect(() => {
    if (account) {
      getTokenInfo();
    }
  }, []);

  useEffect(() => {
    if (account) {
      getTokenInfo();
    }
  }, [account]);

  return {
    name,
    decimals,
    totalSupply,
    symbol,
    balance,
    transfer,
    txBeingSent,
    txError,
  };
};

export default useToken;
