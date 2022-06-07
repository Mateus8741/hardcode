import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 1031px;
  display: flex;
  background-color: #e73634;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
margin-top: 140px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  z-index: 1;
`;

export const ImageBack = styled.img`
  position: absolute;
  left: 68.8%;   
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const Title = styled.h1`
  font-size: 54px;
  color: #fff;
  width: 50%;
  font-family: "Montserrat", sans-serif;
`;

export const ColumnsGroup = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 18%;
  z-index: 1;
`;

export const Column = styled.div`
  flex-direction: column;
  align-items: center;
  width: 41%;
  margin-left: 65px;
`;

export const Subtitle = styled.h2`
  text-align: justify;
  margin-top: 33px;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  font-family: "Montserrat", sans-serif;
`;

export const Efect = styled.span`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
`;

export const FooterMesage = styled.p`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 800;
  color: #000;
  font-family: "Montserrat", sans-serif;
`;
