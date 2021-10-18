import { Formik } from "formik";
import React, { useRef, useState } from "react";
import { Text, View } from "react-native";

import { stylesRegForm } from "../../../styles/regFormStyle";
import PhoneInput from "react-native-phone-number-input";
import { registerValidationPhoneSchema } from "../registerValidPhoneSchema";

export const SecondStepScreen = (props) => {
  const [value, setValue] = useState("");

  const phoneInput = useRef<PhoneInput>(null);

  return (
    <Formik
      initialValues={{ phoneNumber: "" }}
      onSubmit={(values) => {
        props.sendStep();
        console.log(JSON.stringify(values));
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
        <View>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="BY"
            layout="first"
            placeholder="XX XXX XX XX"
            onChangeText={handleChange("phoneNumber")}
            value={values.phoneNumber}
            withDarkTheme
          />
          {!isValid && (
            <Text style={stylesRegForm.errors}>{errors.phoneNumber}</Text>
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
