import styled from "styled-components";

export const Container = styled.div`
  width: 45%;
  margin-left: 160px;

  h1 {
    color: #fff;
    font-size: 64px;
    font-weight: 800;
    font-family: "Montserrat", sans-serif;
  }

  span {
    color: #e73634;
    font-size: 64px;
    font-weight: 800;
    font-family: "Montserrat", sans-serif;
  }

  h6 {
    width: 50%;
    color: #fff;
    font-size: 32px;
    font-weight: 400;
    padding-right: 150px;
    margin-top: 24px;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
  }
`;

export const Background = styled.div`
  background: linear-gradient(#0e0e0e34, #0e0e0e34),
    url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  height: 100%;
`;

export const BackgroundImage = styled.img`
  background-image: url(${(props) => props.src}), noRepeat;
  background-size: cover;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
