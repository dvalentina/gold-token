import { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import { GLD_TOKEN_ADDRESS, GOERLI_CHAIN_ID, TX_STATUS } from "../constants";
import GLDTokenAbi from "../abi/GLDTokenAbi.json";
import { WalletContext } from "../contexts/WalletContext";
import { ToastContext, ADD } from "../contexts/ToastContext";

const useTransaction = ({ updateTokenInfo, updateRoles }) => {
  const { account, chainId } = useContext(WalletContext);
  const { toastDispatch } = useContext(ToastContext);

  const [txStatus, setTxStatus] = useState(TX_STATUS.NONE);
  const [hash, setHash] = useState();

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const token = new ethers.Contract(GLD_TOKEN_ADDRESS, GLDTokenAbi, signer);

  const correctChain = account && chainId === GOERLI_CHAIN_ID;

  function sendTransaction(transact) {
    setHash();
    if (correctChain) {
      setTxStatus(TX_STATUS.WALLET);
      try {
        transact()
          .then((tx) => {
            setHash(tx.hash);
            setTxStatus(TX_STATUS.IN_PROGRESS);
            return tx.wait();
          })
          .then((receipt) => {
            if (receipt.status === 0) {
              throw new Error("Transaction failed");
            }
            setTxStatus(TX_STATUS.SUCCESS);
            toastDispatch({
              type: ADD,
              payload: {
                content: "Transaction successful!",
                status: "success",
              },
            });
            updateTokenInfo();
            updateRoles();
          })
          .catch((error) => {
            setTxStatus(TX_STATUS.ERROR);
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
        setTxStatus(TX_STATUS.ERROR);
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

  function transferTokens(to, amount) {
    sendTransaction(() => token.transfer(to, ethers.utils.parseUnits(amount)));
  }

  function mintTokens(to, amount) {
    sendTransaction(() => token.mint(to, ethers.utils.parseUnits(amount)));
  }

  function burnTokens(from, amount) {
    sendTransaction(() => token.burn(from, ethers.utils.parseUnits(amount)));
  }

  function grantRole(role, address) {
    sendTransaction(() => token.grantRole(role, address));
  }

  function revokeRole(role, address) {
    sendTransaction(() => token.revokeRole(role, address));
  }

  useEffect(() => {
    if (txStatus === TX_STATUS.SUCCESS || txStatus === TX_STATUS.ERROR) {
      setTimeout(() => setTxStatus(TX_STATUS.NONE), 2000);
    }
  });

  return {
    transferTokens,
    mintTokens,
    burnTokens,
    grantRole,
    revokeRole,
    txStatus,
    hash,
  };
};

export default useTransaction;
