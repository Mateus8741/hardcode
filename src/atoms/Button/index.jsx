import * as S from "./styles";

import {FaWhatsapp} from 'react-icons/fa';

const Button = () => {
  return (
    <>
      <S.Container>
        <FaWhatsapp size={15} color="#fff" />
        <S.Text>Let's Code</S.Text>
      </S.Container>
    </>
  );
};

export default Button;
