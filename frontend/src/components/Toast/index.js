import React, { useState } from "react";
import { EMOJI } from "../../constants";
import { Container, Text, Emoji, Close } from "./Toast.styled";

function Toast({ status, text }) {
  const [visible, setVisible] = useState(true);

  useState(() => {
    const interval = setInterval(() => setVisible(false), 10000);
    return () => clearInterval(interval);
  });

  function getEmoji() {
    switch (status) {
      case "success":
        return EMOJI.SUCCESS;
      case "error":
        return EMOJI.ERROR;
      default:
        return EMOJI.NEUTRAL;
    }
  }

  const handleClose = () => {
    setVisible(false);
  };

  return visible ? (
    <Container>
      <Emoji>{getEmoji()}</Emoji>
      <Text>{text}</Text>
      <Close onClick={handleClose}>X</Close>
    </Container>
  ) : null;
}

export default Toast;
