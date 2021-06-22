import React from "react";
import { Text } from "react-native";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
} from "../components/account.styles";

export const RegisterScreen = () => {
  return (
    <>
      <AccountBackground>
        <AccountCover />
        <AccountContainer></AccountContainer>
      </AccountBackground>
    </>
  );
};
