import { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import { GLD_TOKEN_ADDRESS } from "../constants";
import GLDTokenAbi from "../abi/GLDTokenAbi.json";
import { WalletContext } from "../contexts/WalletContext";

const useRoles = () => {
  const { account, chainId } = useContext(WalletContext);

  const [roles, setRoles] = useState({ minter: "", burner: "", admin: "" });

  const [isMinter, setIsMinter] = useState(false);
  const [isBurner, setIsBurner] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const token = new ethers.Contract(GLD_TOKEN_ADDRESS, GLDTokenAbi, signer);

  async function checkIsMinter() {
    const minterRole = await token.MINTER_ROLE();
    token
      .hasRole(minterRole, account)
      .then(setIsMinter)
      .catch((error) => console.log(error));
  }

  async function checkIsBurner() {
    const burnerRole = await token.BURNER_ROLE();
    token
      .hasRole(burnerRole, account)
      .then(setIsBurner)
      .catch((error) => console.log(error));
  }

  async function checkIsAdmin() {
    const adminRole = await token.DEFAULT_ADMIN_ROLE();
    token
      .hasRole(adminRole, account)
      .then(setIsAdmin)
      .catch((error) => console.log(error));
  }

  function checkRoles() {
    if (account) {
      checkIsBurner();
      checkIsMinter();
      checkIsAdmin();
    }
  }

  async function getRoles() {
    const minter = await token.MINTER_ROLE();
    const burner = await token.BURNER_ROLE();
    const admin = await token.DEFAULT_ADMIN_ROLE();

    setRoles({ minter: minter, burner: burner, admin: admin });
  }

  useEffect(() => {
    getRoles();
    checkRoles();
  }, []);

  useEffect(() => {
    checkRoles();
  }, [account, chainId]);

  return {
    roles,
    isMinter,
    isBurner,
    isAdmin,
  };
};

export default useRoles;
