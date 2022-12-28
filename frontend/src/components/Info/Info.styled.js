import styled from "styled-components";

export const Title = styled.h3`
  margin: 0;
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: ${({ left }) => (left ? "auto" : 0)};
  margin-left: ${({ right }) => (right ? "auto" : 0)};

  font-size: 16px;
  white-space: nowrap;
`;

export const Row = styled.div`
  display: flex;
  gap: 24px;
`;
