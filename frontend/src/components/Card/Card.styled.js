import styled from "styled-components";

export const StyledCard = styled.div`
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 24px 32px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h3`
  margin: 0;
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: ${({ left }) => (left ? "auto" : 0)};
  margin-left: ${({ right }) => (right ? "auto" : 0)};

  font-size: 16px;
`;

export const Row = styled.div`
  display: flex;
  gap: 24px;
`;
