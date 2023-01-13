import { ethers } from "ethers";

export const GLD_TOKEN_ADDRESS = "0xe9CC9Ee4f48C6411702f993e9A0C65b4F93af4df";
export const GOERLI_CHAIN_ID = "0x5";

export const BREAKPOINT = {
  S: `(max-width: 500px)`,
  M: `(max-width: 1100px)`,
};

export const TX_STATUS = {
  NONE: null,
  IN_PROGRESS: "in progress",
  SUCCESS: "success",
  ERROR: "error",
  WALLET: "wallet",
};

export const EMOJI = {
  SUCCESS: "B-)",
  NEUTRAL: ":-)",
  ERROR: ":-(",
};

export const FORM = {
  TRANSFER: "transfer",
  MINT: "mint",
  BURN: "burn",
  GRANT: "grant",
  REVOKE: "revoke",
};

export const ROLE = {
  minter: ethers.utils.solidityKeccak256(["string"], ["MINTER_ROLE"]),
  burner: ethers.utils.solidityKeccak256(["string"], ["BURNER_ROLE"]),
};
