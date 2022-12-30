import styled from "styled-components";

export const Container = styled.div`
  align-self: center;
  width: 500px;
  border: 3px dashed black;
  background: #fff;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  padding: 16px 0;
  font-size: 16px;
  margin: 0 auto 0 0;
`;

export const Emoji = styled.p`
  display: flex;
  width: auto;
  padding: 16px 24px;
  font-size: 20px;
  margin: 0;
  font-weight: 600;
  width: auto;
`;

export const Close = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;
  padding: 16px 24px;
  width: auto;
  display: flex;
`;
