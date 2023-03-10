import styled from "styled-components";

export const StyledButton = styled.button`
  align-items: center;
  background-color: ${({ primary }) => (primary ? "black" : "#fff")};
  border-radius: ${({ small }) => (small ? "8px" : "12px")};
  box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
  box-sizing: border-box;
  color: ${({ primary }) => (primary ? "white" : "black")};
  cursor: pointer;
  display: inline-flex;
  font-family: Inter, sans-serif;
  font-size: ${({ small }) => (small ? "1rem" : "1.2rem")};
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: ${({ small }) => (small ? "0.5rem 0.6rem" : "1rem 1.2rem")};
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.2s, -webkit-box-shadow 0.2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  height: auto;
  width: 100%;

  &:hover:not([disabled]) {
    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
  }

  &:disabled {
    background: ${({ primary }) => (primary ? "rgba(0, 0, 0, 0.5)" : "white")};
    color: ${({ primary }) =>
      primary ? "rgba(255,255,255, 0.7)" : "rgba(0, 0, 0, 0.5)"};
    cursor: auto;
  }
`;
