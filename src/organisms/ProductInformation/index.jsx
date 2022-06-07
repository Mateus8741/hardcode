import * as S from "./styles";

import ButtonContact from "../../atoms/ButtonContact";

import Rhcp from "../../assets/Rhcp.svg";
import Logo_Rhcp from "../../assets/Logo_Rhcp.svg";

const ProductInformation = () => {
  return (
    <>
      <S.Background>
        <S.Container>
          <h1>
            DESENVOLVEMOS <span>PRODUTO</span>
          </h1>
          <h6>Para empreendedores sem time de tecnologia.</h6>
          <div
            style={{
              height: 595,
              flexDirection: "row",
              position: "absolute",
              top: "20%",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: -1,
            }}
          >
            <S.BackgroundImage
              src={Logo_Rhcp}
              width="648"
              height="609.09"
              style={{
                transform: "translateX(-25%)",
                marginRight: 20,
              }}
            />
            <S.BackgroundImage src={Rhcp} width="766" height="595" />
          </div>
          <ButtonContact />
        </S.Container>
      </S.Background>
    </>
  );
};

export default ProductInformation;
