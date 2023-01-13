import { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import { GLD_TOKEN_ADDRESS } from "../constants";
import GLDTokenAbi from "../abi/GLDTokenAbi.json";
import { WalletContext } from "../contexts/WalletContext";

const useRoles = () => {
  const { account, chainId } = useContext(WalletContext);

  const [isMinter, setIsMinter] = useState(false);
  const [isBurner, setIsBurner] = useState(false);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const token = new ethers.Contract(GLD_TOKEN_ADDRESS, GLDTokenAbi, signer);

  function checkIsMinter() {
    const minterHash = ethers.utils.solidityKeccak256(
      ["string"],
      ["MINTER_ROLE"]
    );
    token
      .hasRole(minterHash, account)
      .then(setIsMinter)
      .catch((error) => console.log(error));
  }

  function checkIsBurner() {
    const burnerHash = ethers.utils.solidityKeccak256(
      ["string"],
      ["BURNER_ROLE"]
    );
    token
      .hasRole(burnerHash, account)
      .then(setIsBurner)
      .catch((error) => console.log(error));
  }

  function checkRoles() {
    if (account) {
      checkIsBurner();
      checkIsMinter();
    }
  }

  useEffect(() => {
    checkRoles();
  }, []);

  useEffect(() => {
    checkRoles();
  }, [account, chainId]);

  return {
    isMinter,
    isBurner,
  };
};

export default useRoles;
