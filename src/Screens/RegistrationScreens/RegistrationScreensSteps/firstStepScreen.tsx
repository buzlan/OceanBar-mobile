import { Formik } from "formik";
import React from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { stylesRegForm } from "../../../styles/regFormStyle";
import { registerValidationSchema } from "../registerValidSchema";
export const FirstStepScreen = (props) => {
  return (
    <Formik
      initialValues={{ firstname: "", lastname: "", email: "" }}
      onSubmit={(values) => {
        props.sendStep();
        console.log(JSON.stringify(values));
      }}
      validationSchema={registerValidationSchema}
    >
      {({
        initialValues,
        handleChange,
        handleBlur,
        handleSubmit,
        values,
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
                !errors.firstname &&
                values.firstname !== initialValues.firstname && (
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
                !errors.lastname &&
                values.firstname !== initialValues.firstname && (
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
                !errors.email &&
                values.firstname !== initialValues.firstname && (
                  <TextInput.Icon name={"check"} color={"green"} />
                )
              }
            />
          </View>
          {errors.email && touched.email && (
            <Text style={stylesRegForm.errors}>{errors.email}</Text>
          )}
          {props.renderButton({
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
