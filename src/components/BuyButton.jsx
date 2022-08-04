import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  font-family: "Noto Sans KR", sans-serif;
  width: 100px;
  height: 45px;
  font-size: 16px;
  background-color: ${(props) => (props.reverse ? "#000" : "#fff")};
  color: ${(props) => (props.reverse ? "#fff" : "#000")};
  border: 2px solid ${(props) => (props.reverse ? "#000" : "#000")};
  border-radius: 10px;

  &:hover {
    background-color: #007157;
    color: #fff;
  }
`;
export default function BuyButton() {
  return <Button reverse="true">구매하기</Button>;
}
