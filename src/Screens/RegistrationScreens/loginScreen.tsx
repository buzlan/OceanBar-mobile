import { Formik } from "formik";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-elements";
import { loginScreenValidSchema } from "./loginScreenValidSchema";
import { stylesRegForm } from "../../styles/regFormStyle";

import { stylesLoginForm } from "../../styles/loginFormStyle";
import { formStyles } from "../../styles/stylesForm";

import { AuthService } from "../../services/http/AuthService";
import AsyncStorage from "@react-native-community/async-storage";

export const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <View style={formStyles.wrapper}>
        <Text style={stylesLoginForm.textLogo}>Вход</Text>
        <Formik
          initialValues={{ email: "test@mail.com", password: "qwe2Fqwe" }}
          onSubmit={async (values, { setErrors, resetForm }) => {
            console.log(JSON.stringify(values));
            try {
              const response = await AuthService.login(
                values.email,
                values.password
              );
              await AsyncStorage.setItem("token", response.data.token);
              navigation.navigate("tabs", { screen: "Меню" });
              resetForm({});
            } catch (err) {
              setErrors({
                email: "Username or Password is incorrect",
                password: "Username or Password is incorrect",
              });
            }
          }}
          validationSchema={loginScreenValidSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <>
              <View style={formStyles.wrapper}>
                <View style={stylesLoginForm.wrapperInput}>
                  <TextInput
                    mode="outlined"
                    theme={{ colors: { primary: "grey" } }}
                    placeholder="Электронная почта"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                    selectionColor="black"
                    outlineColor="grey"
                    style={stylesLoginForm.emailInput}
                  />
                  {errors.email && touched.email && (
                    <Text style={stylesRegForm.errors}>{errors.email}</Text>
                  )}
                </View>

                <View style={stylesLoginForm.passwordWrapper}>
                  <TextInput
                    mode="outlined"
                    theme={{ colors: { primary: "grey" } }}
                    placeholder="Пароль"
                    onChangeText={handleChange("password")}
                    value={values.password}
                    secureTextEntry={!showPassword}
                    selectionColor="black"
                    outlineColor="grey"
                    style={stylesLoginForm.passwordInput}
                    right={
                      <TextInput.Icon
                        name={showPassword ? "eye-off" : "eye"}
                        onPress={() => setShowPassword(!showPassword)}
                      />
                    }
                  />
                  {errors.password && touched.password && (
                    <Text style={stylesRegForm.errors}>{errors.password}</Text>
                  )}
                </View>

                <View style={stylesLoginForm.forgotWrapper}>
                  <Button
                    title="Забыли пароль"
                    titleStyle={stylesLoginForm.titleForgotBtn}
                    buttonStyle={stylesLoginForm.forgotBtn}
                  />
                </View>
              </View>
              <View style={{ paddingBottom: 20 }}>
                <Button
                  disabled={false}
                  onPress={() => {
                    handleSubmit();
                  }}
                  title="ВXОД"
                  titleStyle={stylesLoginForm.titleInputBtn}
                  buttonStyle={stylesLoginForm.inputButton}
                />
                <Button
                  title="ЗАРЕГИСТРИРОВАТЬСЯ"
                  titleStyle={stylesLoginForm.titleRegisterBtn}
                  buttonStyle={stylesLoginForm.registerButton}
                  onPress={() => {
                    navigation.navigate("auth", {
                      screen: "RegistrationScreen",
                    });
                  }}
                />
              </View>
            </>
          )}
        </Formik>
      </View>
    </>
  );
};
