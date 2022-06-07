import React from "react";

import Header from "./organisms/Header";
import ProductInformation from "./organisms/ProductInformation";
import Manifest from "./organisms/Manifest";

import styled from "styled-components";

const Container = styled.div`
  padding: 0 30px 10px 30px;
`;

function App() {
  return (
    <>
        <Header />
        <ProductInformation />
      <Manifest />
    </>
  );
}

export default App;
