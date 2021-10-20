import { Formik } from "formik";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";

import { stylesRegForm } from "../../../styles/regFormStyle";
import { registerValidationSchema } from "../registerValidSchema";

export const FirstStepScreen = (props) => {
  return (
    <Formik
      initialValues={props.initialValues}
      validateOnMount={true}
      initialErrors={{
        firstname: "initialError",
        lastname: "initialError",
        email: "initialError",
      }}
      onSubmit={(values) => {
        props.sendStep();
        console.log(JSON.stringify(values));
        props.onChange((prevValues) => ({
          ...prevValues,
          ...values,
        }));
      }}
      validationSchema={registerValidationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        isValidating,
        touched,
        errors,
        isValid,
        dirty,
      }) => (
        <View>
          <View>
            <TextInput
              placeholder="Имя"
              onChangeText={handleChange("firstname")}
              onBlur={handleBlur("firstname")}
              value={values.firstname}
              right={
                !errors.firstname && (
                  <TextInput.Icon name={"check"} color={"green"} />
                )
              }
            />
          </View>
          {errors.firstname && touched?.firstname && (
            <Text style={stylesRegForm.errors}>{errors.firstname}</Text>
          )}
          <View>
            <TextInput
              placeholder="Фамилия"
              onChangeText={handleChange("lastname")}
              onBlur={handleBlur("lastname")}
              value={values.lastname}
              right={
                !errors.lastname && (
                  <TextInput.Icon name={"check"} color={"green"} />
                )
              }
            />
          </View>
          {errors.lastname && touched.lastname && (
            <Text style={stylesRegForm.errors}>{errors.lastname}</Text>
          )}
          <View>
            <TextInput
              placeholder="Email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              right={
                !errors.email && (
                  <TextInput.Icon name={"check"} color={"green"} />
                )
              }
            />
          </View>
          {errors.email && touched.email && (
            <Text style={stylesRegForm.errors}>{errors.email}</Text>
          )}
          {props.renderButton({
            isValidating,
            isValid,
            dirty,
            handleSubmit,
            title: "Продолжить",
          })}
        </View>
      )}
    </Formik>
  );
};
