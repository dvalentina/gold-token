import React from "react";
import { Title, Text, Row } from "./Info.styled";
import { Skeleton } from "@mui/material";

function Info({ title, data, loading, additional }) {
  const rows = Object.entries(data).map(([key, value]) => (
    <Row key={key}>
      <Text left>{key}</Text>
      {loading ? (
        <Skeleton variant="text" sx={{ fontSize: "16px", width: "120px" }} />
      ) : (
        <Text right>{value}</Text>
      )}
    </Row>
  ));

  if (additional) {
    rows.push(
      additional.map((value) => (
        <Row key={value}>
          <Text>{value}</Text>
        </Row>
      ))
    );
  }

  return (
    <>
      {title ? <Title>{title}</Title> : null}
      {data ? rows : null}
    </>
  );
}

export default Info;
