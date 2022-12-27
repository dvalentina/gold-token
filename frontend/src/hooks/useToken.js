import { useState } from "react";
import { ethers } from "ethers";
import { GLD_TOKEN_ADDRESS } from "../constants";
import GLDTokenAbi from "../abi/GLDTokenAbi.json";

const useToken = () => {
  const [name, setName] = useState(null);
  const [decimals, setDecimals] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [totalSupply, setTotalSupply] = useState(null);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const token = new ethers.Contract(GLD_TOKEN_ADDRESS, GLDTokenAbi, signer);

  token
    .name()
    .then((res) => setName(res))
    .catch((err) => {
      console.log(err);
    });

  token
    .decimals()
    .then((res) => setDecimals(res))
    .catch((err) => {
      console.log(err);
    });

  token
    .symbol()
    .then((res) => setSymbol(res))
    .catch((err) => {
      console.log(err);
    });

  token
    .totalSupply()
    .then((res) => {
      const supplyNum = Number(ethers.utils.formatEther(res));
      setTotalSupply(supplyNum.toFixed(2));
    })
    .catch((err) => {
      console.log(err);
    });

  return { name, decimals, totalSupply, symbol };
};

export default useToken;
