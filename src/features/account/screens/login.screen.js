import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  LoginInput,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, error } = useContext(AuthenticationContext);
  console.log(error);

  return (
    <>
      <AccountBackground>
        <AccountCover />
        <AccountContainer>
          <LoginInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            label="Email"
          />
          <Spacer position="top" size="large">
            <LoginInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              label="Password"
              textContentType="password"
              autoCapitalize="none"
              secure
              secureTextEntry
            />
          </Spacer>

          {error && (
            <Spacer>
              <Text variant="error">{error}</Text>
            </Spacer>
          )}

          <Spacer position="top" size="large">
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          </Spacer>
        </AccountContainer>
      </AccountBackground>
    </>
  );
};
