import { Formik } from "formik";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import { StepIndicatorComponent } from "../../../components/StepIndicator";
import { stylesLoginForm } from "../../../styles/loginFormStyle";

import { stylesRegForm } from "../../../styles/regFormStyle";
import { formStyles } from "../../../styles/stylesForm";
import { registerValidationSchema } from "../registerValidSchema";

export const FirstStepScreen = (props) => {
  return (
    <View style={formStyles.flex}>
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
          <View style={formStyles.flex}>
            <View style={stylesRegForm.wrapperInput}>
              <TextInput
                mode="outlined"
                theme={{ colors: { primary: "grey" } }}
                placeholder="Имя"
                onChangeText={handleChange("firstname")}
                onBlur={handleBlur("firstname")}
                value={values.firstname}
                selectionColor="black"
                outlineColor="grey"
                style={stylesRegForm.emailInput}
                right={
                  !errors.firstname && (
                    <TextInput.Icon name={"check"} color={"green"} />
                  )
                }
              />
              {errors.firstname && touched?.firstname && (
                <Text style={stylesRegForm.errors}>{errors.firstname}</Text>
              )}
            </View>

            <View style={stylesRegForm.passwordWrapper}>
              <TextInput
                mode="outlined"
                theme={{ colors: { primary: "grey" } }}
                placeholder="Фамилия"
                onChangeText={handleChange("lastname")}
                onBlur={handleBlur("lastname")}
                value={values.lastname}
                selectionColor="black"
                outlineColor="grey"
                style={stylesRegForm.passwordInput}
                right={
                  !errors.lastname && (
                    <TextInput.Icon name={"check"} color={"green"} />
                  )
                }
              />
              {errors.lastname && touched.lastname && (
                <Text style={stylesRegForm.errors}>{errors.lastname}</Text>
              )}
            </View>
            <View style={stylesRegForm.passwordWrapper}>
              <TextInput
                mode="outlined"
                theme={{ colors: { primary: "grey" } }}
                placeholder="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                selectionColor="black"
                outlineColor="grey"
                style={stylesRegForm.passwordInput}
                right={
                  !errors.email && (
                    <TextInput.Icon name={"check"} color={"green"} />
                  )
                }
              />
              {errors.email && touched.email && (
                <Text style={stylesRegForm.errors}>{errors.email}</Text>
              )}
            </View>
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
    </View>
  );
};
