import React, { useContext } from "react";
import { Text, Row, IconButton } from "../Info/Info.styled";
import { TokenContext } from "../../contexts/TokenContext";
import Card from "../Card";
import { shortenAddress } from "../../utils";
import { ReactComponent as CopyIcon } from "../../images/CopyIcon.svg";
import { ToastContext, ADD } from "../../contexts/ToastContext";
import Link from "../Link";

function TransactionCard() {
  const { hash } = useContext(TokenContext);
  const { toastDispatch } = useContext(ToastContext);

  const handleCopy = () => {
    navigator.clipboard.writeText(hash);
    toastDispatch({
      type: ADD,
      payload: {
        content: "Copied to clipboard!",
      },
    });
  };

  return hash ? (
    <Card>
      <Row $wrap>
        <Text>
          Transaction hash: {shortenAddress(hash)}{" "}
          <IconButton onClick={handleCopy}>
            <CopyIcon />
          </IconButton>
        </Text>
        <Text>
          See details on
          <Link
            link={`https://goerli.etherscan.io/tx/${hash}`}
            text="Etherscan"
          />
        </Text>
      </Row>
    </Card>
  ) : null;
}

export default TransactionCard;
