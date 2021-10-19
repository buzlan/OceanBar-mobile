import { Formik } from "formik";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { stylesRegForm } from "../../../styles/regFormStyle";
import { registerValidationPasswordSchema } from "../registerValidPasswordSchema";

export const ThirdStepScreen = (props, navigation) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Formik
      initialValues={{ password: "" }}
      onSubmit={(values) => {
        props.sendStep();
        props.showAlert();
        console.log(JSON.stringify(values));
      }}
      validationSchema={registerValidationPasswordSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        initialValues,
        values,
        touched,
        errors,
        isValid,
        dirty,
      }) => (
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

          {!isValid && (
            <Text style={stylesRegForm.errors}>{errors.password}</Text>
          )}
          {props.renderButton({
            isValid,
            dirty,
            handleSubmit,
            title: "Зарегестрироваться",
          })}
        </View>
      )}
    </Formik>
  );
};
