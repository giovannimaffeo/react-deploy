import React from "react";
import { FaUser, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  Container,
  Logocce,
  InputContainer,
  Input,
  ButtonContainer,
  ButtonText,
  RegisterButton,
  RegisterText
} from "./styles";
import colors from "../../constants/colors";
import cceLogo from "../../constants/assets/cceIcon.jpeg";

export default function Login() {
  return (
    <Container>
      <Logocce src={cceLogo} alt="CCE" />
      <InputContainer second={true}>
        <Input type="text" placeholder="E-mail" />
        <FaUser size={18} color={colors.darkPrimary} />
      </InputContainer>
      <InputContainer second={true}>
        <Input type="password" placeholder="Senha" />
        <FaKey size={18} color={colors.darkPrimary} />
      </InputContainer>
      <Link to="/home">
        <ButtonContainer>
          <ButtonText>Entrar</ButtonText>
        </ButtonContainer>
      </Link>
      <RegisterButton>
        <Link to="/register">
          <RegisterText>Não tenho cadastro</RegisterText>
        </Link>
      </RegisterButton>
    </Container>
  );
}
