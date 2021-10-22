import { Formik } from "formik";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-elements";
import { loginScreenValidSchema } from "./loginScreenValidSchema";
import { stylesRegForm } from "../../styles/regFormStyle";
import axios from "axios";
import { stylesLoginForm } from "../../styles/loginFormStyle";
import { formStyles } from "../../styles/stylesForm";

export const LoginScreen = ({ props, navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const callApi = (values) => {
    axios
      .post("https://reqres.in/api/register", {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        if (response.status === 200) {
          console.log(JSON.stringify(response.data));
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <View style={formStyles.wrapper}>
        <Text style={stylesLoginForm.textLogo}>Вход</Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(JSON.stringify(values));
            callApi(values);
            navigation.navigate("tabs", { screen: "Меню" });
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
                  onPress={handleSubmit}
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
