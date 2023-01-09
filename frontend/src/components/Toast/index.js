import React, { useState, useContext } from "react";
import { EMOJI } from "../../constants";
import { ToastContext, REMOVE } from "../../contexts/ToastContext";
import { Container, Text, Emoji, Close } from "./Toast.styled";

function Toast({ status, content, id }) {
  const { toastDispatch } = useContext(ToastContext);

  useState(() => {
    const interval = setInterval(() => handleClose(), 10000);
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
    toastDispatch({ type: REMOVE, payload: { id: id } });
  };

  return (
    <Container>
      <Emoji>{getEmoji()}</Emoji>
      <Text>{content}</Text>
      <Close onClick={handleClose}>X</Close>
    </Container>
  );
}

export default Toast;
