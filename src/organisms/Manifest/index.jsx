import React from "react";

import SJ from "../../assets/SteveJobs.svg";
import Aspas from "../../assets/Aspas.svg";

import * as S from "./styles";

export default function Manifest() {
  return (
    <S.Container>
      <S.ImageBack src={Aspas} width="537.8" height="409.38" />
      <S.Image src={SJ} width="992" height="407" />
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginTop: -70,
          marginRight: 190,
          zIndex: 1,
        }}
      >
        <S.Title>MANIFESTO HARD CODE</S.Title>
      </div>
      <S.ColumnsGroup>
        <S.Column>

          <S.Subtitle>
            Na adolescência você sonhou em ser um <S.Efect>rock star</S.Efect>,
            mas o tempo passou e hoje sua vida é pagar boletos, enfrentar duas
            horas de trânsito e trabalhar em uma empresa que não consegue se ver
            mais nela.
          </S.Subtitle>
          <S.Subtitle>
            Depois de dois anos trabalhando em casa, você teve que voltar para a
            vida de escrtório e percebeu que nem uma pandemia conseguiu fazer a{" "}
            <S.Efect>transformação digital</S.Efect> que seu trabalho precisava.
          </S.Subtitle>
        </S.Column>
        <S.Column>
          <S.Subtitle>
            Todos os dias você sabendo de mais um jovem que ficou milionário
            criando uma startup que você ja tinha tido a idéia com seus amigos
            antes. <S.Efect>Até quando você vai viver essa vida?</S.Efect>
          </S.Subtitle>
          <S.Subtitle>
            Te apoiamos a empreender. Somos a experiência em empreendedorismo e
            tecnologia que sua startup precisa.
            <S.FooterMesage>HEY OH, LET'S CODE!</S.FooterMesage>
          </S.Subtitle>
        </S.Column>
      </S.ColumnsGroup>
    </S.Container>
  );
}
