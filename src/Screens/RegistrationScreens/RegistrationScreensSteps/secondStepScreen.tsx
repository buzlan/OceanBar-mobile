import { Formik } from "formik";
import React from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { stylesRegForm } from "../../../styles/regFormStyle";
import { registerValidationSchema } from "../registerValidSchema";

export const SecondStepScreen = () => {
  return (
    <Formik
      initialValues={{ firstname: "", lastname: "", email: "" }}
      validateOnMount={true}
      onSubmit={(values) => console.log(JSON.stringify(values))}
      validationSchema={registerValidationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <View>
          <View>
            <TextInput
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              right={
                !errors.email ? (
                  <TextInput.Icon name={"check"} color={"green"} />
                ) : null
              }
            />
          </View>
          {errors.email && touched.email && (
            <Text style={stylesRegForm.errors}>{errors.email}</Text>
          )}

          <Button
            disabled={
              !isValid ||
              (Object.keys(touched).length === 0 &&
                touched.constructor === Object)
            }
            onPress={handleSubmit}
            title="Регистрация"
          />
        </View>
      )}
    </Formik>
  );
};
