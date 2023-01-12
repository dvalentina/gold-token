import styled from "styled-components";

export const RadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: nowrap;
`;

export const RadioButton = styled.input`
  appearance: none;
  margin: 0;
`;

export const Label = styled.label`
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: transparent 0 0 0 3px, rgba(18, 18, 18, 0.1) 0 6px 20px;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  display: inline-flex;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 0.5rem 0.6rem;
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

  &:has(input:disabled) {
    background: white;
    color: rgba(0, 0, 0, 0.5);
    cursor: auto;
  }

  &:has(input:checked) {
    background: black;
    color: white;
    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;
  }

  &:has(input:checked:disabled) {
    background: rgba(0, 0, 0, 0.5);
    color: rgba(255, 255, 255, 0.7);
    box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 3px, transparent 0 0 0 0;
    cursor: auto;
  }
`;
