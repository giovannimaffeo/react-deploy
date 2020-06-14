import styled from "styled-components";

import colors from "../../constants/colors";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  align-items: center;
`;

export const RegisterCard = styled.div`
  width: 100%;
  height: 100vh;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconContainer = styled.div`
  background-color: ${colors.darkPrimary};
  padding-top: 15px;

  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
`;

export const BackButton = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  width: 20px;
`;

export const Logocce = styled.img`
  margin-top: 20%;
  width: 95px;
  height: 95px;
  align-self: center;
`;

export const InformationContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  padding-top: 7%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InformationTitle = styled.h1`
  color: ${colors.darkPrimary};
`;

export const Inputs = styled.div`
  margin-top: 10%;
`;

export const Input = styled.input`
  border-width: 0px;
  font-size: 12px;
  width: 250px;
`;

export const InputContainer = styled.div`
  margin-top: ${props => (props.second ? 15 : 10)}px;
  border-style: solid;
  border-width: 0px;
  border-bottom-width: 2.2px;
  border-color: ${colors.primary};
  padding: 8px 7px;
  width: 96%;
  justify-self: center;
  display: flex;
  flex-direction: row;
`;

export const ButtonContainer = styled.button`
  background-color: ${colors.primary};
  border-radius: 10px;
  border: none;
  padding: 13px 14px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin-top: 20px;
`;

export const ButtonText = styled.text`
  color: #fff;
  font-weight: bold;
`;
