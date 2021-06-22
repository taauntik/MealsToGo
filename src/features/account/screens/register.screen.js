import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  LoginInput,
  ErrorContainer,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const { onRegister, error } = useContext(AuthenticationContext);
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
              secureTextEntry
            />
          </Spacer>
          <Spacer position="top" size="large">
            <LoginInput
              value={repeatedPassword}
              onChangeText={(text) => setRepeatedPassword(text)}
              label="Repeat Password"
              textContentType="password"
              autoCapitalize="none"
              secureTextEntry
            />
          </Spacer>
          {error && (
            <ErrorContainer>
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          )}

          <Spacer position="top" size="large">
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>
          </Spacer>
        </AccountContainer>
        <Spacer position="top" size="large">
          <AuthButton mode="contained" onPress={() => navigation.goBack()}>
            Back
          </AuthButton>
        </Spacer>
      </AccountBackground>
    </>
  );
};
