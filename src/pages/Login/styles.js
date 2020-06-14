import styled from "styled-components";

import colors from "../../constants/colors";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding-top: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logocce = styled.img`
  height: 200px;
  width: 200px;
`;

export const Input = styled.input`
  border-width: 0px;
  width: 95%;
`;

export const InputContainer = styled.div`
  margin-top: ${props => (props.second ? 20 : 30)}px;
  border-style: solid;
  border-width: 0px;
  border-bottom-width: 2.2px;
  border-color: ${colors.primary};
  padding: 8px 7px;
  width: 67%;
  display: flex;
  flex-direction: row;
`;

export const ButtonContainer = styled.button`
  background-color: ${colors.lightPrimary};
  border-radius: 10px;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin-top: 30px;
`;

export const ButtonText = styled.text`
  color: #fff;
  font-weight: bold;
`;

export const RegisterButton = styled.text`
  margin-top: 7%;
`;

export const RegisterText = styled.text`
  color: ${colors.primary};
`;
