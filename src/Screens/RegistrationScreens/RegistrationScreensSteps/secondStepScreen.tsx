import { Formik } from "formik";
import React from "react";
import { Text, View } from "react-native";

import { stylesRegForm } from "../../../styles/regFormStyle";

import { registerValidationPhoneSchema } from "../registerValidPhoneSchema";
import { TextInput } from "react-native-paper";

import { formStyles } from "../../../styles/stylesForm";

export const SecondStepScreen = (props) => {
  return (
    <View style={formStyles.flex}>
      <Formik
        initialValues={props.formValues}
        validateOnMount={true}
        onSubmit={(values) => {
          props.sendStep();
          console.log(JSON.stringify(values));
          props.onChange((prevValues) => ({
            ...prevValues,
            phoneNumber: values.phoneNumber,
          }));
        }}
        validationSchema={registerValidationPhoneSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          isValid,
          dirty,
        }) => (
          <View style={formStyles.flex}>
            <View style={stylesRegForm.passwordWrapper}>
              <TextInput
                mode="outlined"
                theme={{ colors: { primary: "grey" } }}
                placeholder="Номер телефона"
                onChangeText={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                value={values.phoneNumber}
                selectionColor="black"
                outlineColor="grey"
                style={stylesRegForm.passwordInput}
                right={
                  !errors.phoneNumber && (
                    <TextInput.Icon name={"check"} color={"green"} />
                  )
                }
              />
              {errors.phoneNumber && dirty && (
                <Text style={stylesRegForm.errors}>{errors.phoneNumber}</Text>
              )}
            </View>
            {props.renderButton({
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
