import React from "react";
import Toast from "../Toast";
import { Container } from "./Notifications.styled";

function Notifications({ toasts }) {
  return (
    <Container>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          content={toast.content}
          id={toast.id}
          status={toast.status}
        />
      ))}
    </Container>
  );
}

export default Notifications;
