import React from "react";

import Header from "./organisms/Header";
import ProductInformation from "./organisms/ProductInformation";
import Manifest from "./organisms/Manifest";

import styled from "styled-components";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 0 30px 10px 30px;
`;

function App() {
  return (
    <>
      <Helmet>
        <title>DESENVOLVEMOS PRODUTO | HARD CODE</title>
        <meta
          name="description"
          content="Para empreendedores sem time de tecnologia. Hey oh, let's code! 🤟"
        />
        <meta name="keywords" content="hard code, empreendedor, startup" />
        <meta property="og:title" content="HARD CODE" />
        <meta
          property="og:description"
          content="DEASENVOLVEMOS PRODUTO, para empreendedores sem time de tecnologia. Hey oh, let's code! 🤟"
        />
      </Helmet>
      <Header />
      <ProductInformation />
      <Manifest />
    </>
  );
}

export default App;
