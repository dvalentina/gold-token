import styled from "styled-components";

export const Title = styled.h3`
  margin: 0;
`;

export const Subtitle = styled.p`
  margin: 0;
`;

export const Label = styled.label`
  font-size: 16px;
  white-space: nowrap;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  height: 100%;
`;

export const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`;

export const Input = styled.input`
  border: none;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 14px 16px;
  font-size: 16px;

  &:focus,
  &:active,
  &:focus-visible {
    border: 2px solid black;
    outline: none;
  }
`;
