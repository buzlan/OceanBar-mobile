import { Formik } from "formik";
import React, { Dispatch } from "react";
import { Text, View } from "react-native";

import { TextInput } from "react-native-paper";

import { stylesRegForm } from "../../../styles/regFormStyle";
import { formStyles } from "../../../styles/stylesForm";
import { FormValues } from "../regForm";
import { registerValidationSchema } from "../registerValidSchema";

type FirstStepScreenProps = {
  onChange: Dispatch<React.SetStateAction<FormValues>>;
  formValues: FormValues;
  sendStep: () => void;
  regError: string | undefined;
  renderButton: ({
    isValid,
    handleSubmit,
    title,
  }: {
    isValid: boolean;
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    title: string;
  }) => JSX.Element;
};

export const FirstStepScreen = (props: FirstStepScreenProps) => {
  return (
    <View style={formStyles.flex}>
      <Formik
        initialValues={props.formValues}
        validateOnMount={true}
        initialErrors={{
          firstname: "initialError",
          lastname: "initialError",
          email: "initialError",
        }}
        onSubmit={(values) => {
          props.sendStep();
          props.onChange((prevValues) => ({
            ...prevValues,
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
          }));
        }}
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
              {props.regError && (
                <Text style={stylesRegForm.errors}>{props.regError}</Text>
              )}
            </View>
            {props.renderButton({
              isValid,
              handleSubmit,
              title: "Продолжить",
            })}
          </View>
        )}
      </Formik>
    </View>
  );
};
