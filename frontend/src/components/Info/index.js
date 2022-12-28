import React from "react";
import { Title, Text, Row } from "./Info.styled";

function Info({ title, data }) {
  const rows = Object.entries(data).map(([key, value]) => (
    <Row key={key}>
      <Text left>{key}</Text>
      <Text right>{value}</Text>
    </Row>
  ));

  return (
    <>
      {title ? <Title>{title}</Title> : null}
      {data ? rows : null}
    </>
  );
}

export default Info;
