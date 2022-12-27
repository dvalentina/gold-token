import React from "react";
import { StyledCard, Title, Text, Row } from "./Card.styled";

function Card({ title, data }) {
  const rows = Object.entries(data).map(([key, value]) => (
    <Row key={key}>
      <Text left>{key}</Text>
      <Text right>{value}</Text>
    </Row>
  ));

  return title || data ? (
    <StyledCard>
      {title ? <Title>{title}</Title> : null}
      {data ? rows : null}
    </StyledCard>
  ) : null;
}

export default Card;
