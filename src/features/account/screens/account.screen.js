import React from "react";

import { Spacer } from "../../../components/spacer/spacer.component";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <>
      <AccountBackground>
        <AccountCover />
        <Title>Meals To Go</Title>
        <AccountContainer>
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            login
          </AuthButton>
          <Spacer size="large" position="top">
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => navigation.navigate("Register")}
            >
              register
            </AuthButton>
          </Spacer>
        </AccountContainer>
      </AccountBackground>
    </>
  );
};
