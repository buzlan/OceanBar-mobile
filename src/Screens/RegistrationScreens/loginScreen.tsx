import { Formik } from "formik";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-elements";
import { loginScreenValidSchema } from "./loginScreenValidSchema";
import { stylesRegForm } from "../../styles/regFormStyle";

export const LoginScreen = ({ props, navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          navigation.navigate("tabs", { screen: "Профиль" });
          console.log(JSON.stringify(values));
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
          <View>
            <View>
              <TextInput
                placeholder="Электронная почта"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            {errors.email && touched.email && (
              <Text style={stylesRegForm.errors}>{errors.email}</Text>
            )}
            <View>
              <TextInput
                placeholder="Пароль"
                onChangeText={handleChange("password")}
                value={values.password}
                secureTextEntry={!showPassword}
                right={
                  <TextInput.Icon
                    name={showPassword ? "eye-off" : "eye"}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                }
              />
            </View>
            {errors.password && touched.password && (
              <Text style={stylesRegForm.errors}>{errors.password}</Text>
            )}
            <Button disabled={false} onPress={handleSubmit} title="Войти" />
          </View>
        )}
      </Formik>
      <Button
        title="Зарегестрироваться"
        onPress={() => {
          navigation.navigate("auth", { screen: "RegistrationScreen" });
        }}
      />
      <Button title="Забыл пароль" />
    </>
  );
};
