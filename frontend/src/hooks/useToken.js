import { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import { GLD_TOKEN_ADDRESS, GOERLI_CHAIN_ID, TX_STATUS } from "../constants";
import GLDTokenAbi from "../abi/GLDTokenAbi.json";
import { WalletContext } from "../contexts/WalletContext";
import { ToastContext, ADD } from "../contexts/ToastContext";

const useToken = () => {
  const { account, chainId } = useContext(WalletContext);
  const { toastDispatch } = useContext(ToastContext);

  const [name, setName] = useState(null);
  const [decimals, setDecimals] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [totalSupply, setTotalSupply] = useState(null);
  const [balance, setBalance] = useState(null);

  const [transferStatus, setTransferStatus] = useState(TX_STATUS.NONE);
  const [mintStatus, setMintStatus] = useState(TX_STATUS.NONE);
  const [burnStatus, setBurnStatus] = useState(TX_STATUS.NONE);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const token = new ethers.Contract(GLD_TOKEN_ADDRESS, GLDTokenAbi, signer);

  const correctChain = account && chainId === GOERLI_CHAIN_ID;

  function getName() {
    if (correctChain) {
      token
        .name()
        .then((res) => setName(res))
        .catch((err) => console.log(err));
    }
  }

  function getDecimals() {
    if (correctChain) {
      token
        .decimals()
        .then((res) => setDecimals(res))
        .catch((err) => console.log(err));
    }
  }

  function getSymbol() {
    if (correctChain) {
      token
        .symbol()
        .then((res) => setSymbol(res))
        .catch((err) => console.log(err));
    }
  }

  function getTotalSupply() {
    if (correctChain) {
      token
        .totalSupply()
        .then((res) => {
          const supplyNum = Number(ethers.utils.formatEther(res));
          setTotalSupply(supplyNum.toFixed(2));
        })
        .catch((err) => console.log(err));
    }
  }

  function getBalance() {
    if (correctChain) {
      token
        .balanceOf(account)
        .then((res) => {
          const tokenNum = Number(ethers.utils.formatEther(res));
          setBalance(tokenNum.toFixed(2));
        })
        .catch((err) => console.log(err));
    }
  }

  function transfer(to, amount) {
    if (correctChain) {
      setTransferStatus(TX_STATUS.WALLET);
      try {
        token
          .transfer(to, ethers.utils.parseUnits(amount))
          .then((tx) => {
            setTransferStatus(TX_STATUS.IN_PROGRESS);
            return tx.wait();
          })
          .then((receipt) => {
            if (receipt.status === 0) {
              throw new Error("Transfer failed");
            }
            setTransferStatus(TX_STATUS.SUCCESS);
            toastDispatch({
              type: ADD,
              payload: {
                content: "Transfer successful!",
                status: "success",
              },
            });
            getBalance();
          })
          .catch((error) => {
            setTransferStatus(TX_STATUS.ERROR);
            if (error.code === "ACTION_REJECTED") {
              toastDispatch({
                type: ADD,
                payload: {
                  content: "You rejected the transfer",
                  status: "error",
                },
              });
              return;
            }
            toastDispatch({
              type: ADD,
              payload: {
                content: "Some error occurred. Try again later",
                status: "error",
              },
            });
            console.error(error);
          });
      } catch (error) {
        setTransferStatus(TX_STATUS.ERROR);
        toastDispatch({
          type: ADD,
          payload: {
            content: "Some error occurred. Try again later",
            status: "error",
          },
        });
        console.error(error);
      }
    }
  }

  function mint(to, amount) {
    if (correctChain) {
      setMintStatus(TX_STATUS.WALLET);
      try {
        token
          .mint(to, ethers.utils.parseUnits(amount))
          .then((tx) => {
            setMintStatus(TX_STATUS.IN_PROGRESS);
            return tx.wait();
          })
          .then((receipt) => {
            if (receipt.status === 0) {
              throw new Error("Mint failed");
            }
            setMintStatus(TX_STATUS.SUCCESS);
            toastDispatch({
              type: ADD,
              payload: {
                content: "Mint successful!",
                status: "success",
              },
            });
            getBalance();
            getTotalSupply();
          })
          .catch((error) => {
            setMintStatus(TX_STATUS.ERROR);
            if (error.code === "ACTION_REJECTED") {
              toastDispatch({
                type: ADD,
                payload: {
                  content: "You rejected the transaction",
                  status: "error",
                },
              });
              return;
            }
            toastDispatch({
              type: ADD,
              payload: {
                content: "Some error occurred. Try again later",
                status: "error",
              },
            });
            console.error(error);
          });
      } catch (error) {
        setMintStatus(TX_STATUS.ERROR);
        toastDispatch({
          type: ADD,
          payload: {
            content: "Some error occurred. Try again later",
            status: "error",
          },
        });
        console.error(error);
      }
    }
  }

  function burn(from, amount) {
    if (correctChain) {
      setBurnStatus(TX_STATUS.WALLET);
      try {
        token
          .burn(from, ethers.utils.parseUnits(amount))
          .then((tx) => {
            setBurnStatus(TX_STATUS.IN_PROGRESS);
            return tx.wait();
          })
          .then((receipt) => {
            if (receipt.status === 0) {
              throw new Error("Burn failed");
            }
            setBurnStatus(TX_STATUS.SUCCESS);
            toastDispatch({
              type: ADD,
              payload: {
                content: "Burn successful!",
                status: "success",
              },
            });
            getBalance();
            getTotalSupply();
          })
          .catch((error) => {
            setBurnStatus(TX_STATUS.ERROR);
            if (error.code === "ACTION_REJECTED") {
              toastDispatch({
                type: ADD,
                payload: {
                  content: "You rejected the transaction",
                  status: "error",
                },
              });
              return;
            }
            toastDispatch({
              type: ADD,
              payload: {
                content: "Some error occurred. Try again later",
                status: "error",
              },
            });
            console.error(error);
          });
      } catch (error) {
        setBurnStatus(TX_STATUS.ERROR);
        toastDispatch({
          type: ADD,
          payload: {
            content: "Some error occurred. Try again later",
            status: "error",
          },
        });
        console.error(error);
      }
    }
  }

  function getTokenInfo() {
    getName();
    getDecimals();
    getSymbol();
    getTotalSupply();
    getBalance();
  }

  useEffect(() => {
    getTokenInfo();
  }, []);

  useEffect(() => {
    getTokenInfo();
  }, [account, chainId]); // chainId

  useEffect(() => {
    if (
      transferStatus === TX_STATUS.SUCCESS ||
      transferStatus === TX_STATUS.ERROR
    ) {
      setTimeout(() => setTransferStatus(TX_STATUS.NONE), 2000);
    }
    if (mintStatus === TX_STATUS.SUCCESS || mintStatus === TX_STATUS.ERROR) {
      setTimeout(() => setMintStatus(TX_STATUS.NONE), 2000);
    }
    if (burnStatus === TX_STATUS.SUCCESS || burnStatus === TX_STATUS.ERROR) {
      setTimeout(() => setBurnStatus(TX_STATUS.NONE), 2000);
    }
  });

  return {
    name,
    decimals,
    totalSupply,
    symbol,
    balance,
    transfer,
    transferStatus,
    mint,
    mintStatus,
    burn,
    burnStatus,
  };
};

export default useToken;
