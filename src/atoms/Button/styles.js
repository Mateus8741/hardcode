import styled from "styled-components";

export const Container = styled.button`
  width: 160px;
  height: 40px;
  margin-right: ${window.innerWidth >= 1920 ? "169" : "110"}px;
  margin-left: 208px;
  background-color: #e73634;
  border: 1px solid #e73634;
  color: #fff;
`;

export const Text = styled.span`
  color: #fff;
  font-size: 17px;
  margin-left: 10px;
  font-family: "Montserrat", sans-serif;
`;
