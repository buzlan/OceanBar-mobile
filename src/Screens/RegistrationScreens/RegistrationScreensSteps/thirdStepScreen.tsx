import { Formik } from "formik";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";

import { stylesRegForm } from "../../../styles/regFormStyle";
import { formStyles } from "../../../styles/stylesForm";
import { registerValidationPasswordSchema } from "../registerValidPasswordSchema";

export const ThirdStepScreen = (props, navigation) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={formStyles.flex}>
      <Formik
        initialValues={props.formValues}
        initialErrors={{ password: "" }}
        onSubmit={(values) => {
          props.onChange((prevValues) => ({
            ...prevValues,
            password: values.password,
          }));
          props.sendStep();
        }}
        validationSchema={registerValidationPasswordSchema}
      >
        {({ handleChange, handleSubmit, values, errors, isValid, dirty }) => (
          <View style={formStyles.flex}>
            <View style={stylesRegForm.passwordWrapper}>
              <TextInput
                mode="outlined"
                theme={{ colors: { primary: "grey" } }}
                placeholder="Пароль"
                onChangeText={handleChange("password")}
                value={values.password}
                secureTextEntry={!showPassword}
                selectionColor="black"
                outlineColor="grey"
                style={stylesRegForm.passwordInput}
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
            </View>
            {props.renderButton({
              isValid,
              dirty,
              handleSubmit,
              title: "Зарегестрироваться",
            })}
          </View>
        )}
      </Formik>
    </View>
  );
};
