import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: auto 200px 200px 200px 200px auto;
  padding: 24px 0;

  @media (max-width: 1100px) {
    grid-template-columns: auto 400px auto;
  }

  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
`;

export const LogoGrid = styled.div`
  display: flex;
  justify-content: center;
  grid-row: 1;
  grid-column: 2 / -2;

  @media (max-width: 1100px) {
    grid-column: 2;
    grid-row: 1;
  }

  @media (max-width: 500px) {
    grid-column: 1;
    grid-row: 1;
  }
`;

export const AccountGrid = styled.div`
  display: flex;
  grid-row: 2;
  grid-column: 2 / 4;

  @media (max-width: 1100px) {
    grid-column: 2;
    grid-row: 2;
  }

  @media (max-width: 500px) {
    grid-column: 1;
    grid-row: 2;
  }
`;

export const TokenGrid = styled.div`
  display: flex;
  grid-column: 2 / 4;
  grid-row: 3;

  @media (max-width: 1100px) {
    grid-column: 2;
    grid-row: 3;
  }

  @media (max-width: 500px) {
    grid-column: 1;
    grid-row: 3;
  }
`;

export const TransferGrid = styled.div`
  display: flex;
  grid-row: 2 / 4;
  grid-column: 4 / 6;

  @media (max-width: 1100px) {
    grid-column: 2;
    grid-row: 4;
  }

  @media (max-width: 500px) {
    grid-column: 1;
    grid-row: 4;
  }
`;

export const WalletGrid = styled.div`
  display: flex;
  grid-row: 2;
  grid-column: 3 / 5;

  @media (max-width: 1100px) {
    grid-column: 2;
    grid-row: 2;
  }

  @media (max-width: 500px) {
    grid-column: auto;
    grid-row: 2;
    padding: 0 24px;
  }
`;
