import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaKey, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
  Container,
  BackButton,
  RegisterCard,
  IconContainer,
  Logocce,
  InformationContainer,
  InformationTitle,
  Inputs,
  InputContainer,
  Input,
  ButtonContainer,
  ButtonText
} from "./styles";
import cceLogo from "../../constants/assets/cceIcon.jpeg";
import colors from "../../constants/colors";

export default function Register() {
  return (
    <Container>
      <RegisterCard>
        <IconContainer>
          <Link to="/">
            <BackButton>
              <IoIosArrowBack size={24} color="#fff" />
            </BackButton>
          </Link>
          <Logocce src={cceLogo} alt="CCE" />
        </IconContainer>
        <InformationContainer>
          <InformationTitle>Cadastro</InformationTitle>
          <Inputs>
            <InputContainer>
              <Input type="text" placeholder="Nome" />
              <FaUser size={12} color={colors.darkPrimary} />
            </InputContainer>
            <InputContainer second={true}>
              <Input type="text" placeholder="E-mail" />
              <FaUser size={12} color={colors.darkPrimary} />
            </InputContainer>
            <InputContainer second={true}>
              <Input type="password" placeholder="Senha" />
              <FaKey size={12} color={colors.darkPrimary} />
            </InputContainer>
          </Inputs>
          <Link to="/home">
            <ButtonContainer>
              <ButtonText>Confirmar</ButtonText>
            </ButtonContainer>
          </Link>
        </InformationContainer>
      </RegisterCard>
    </Container>
  );
}
