import { Formik } from "formik";
import React, { useRef, useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { stylesRegForm } from "../../../styles/regFormStyle";
import PhoneInput from "react-native-phone-number-input";

const phoneRegex = /^[0-9]{9}$/;

export const SecondStepScreen = (props) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  return (
    <Formik
      initialValues={{ phoneNumber: "" }}
      onSubmit={(values) => console.log(JSON.stringify(values))}
    >
      {({
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
              placeholder="Номер телефона"
              onChangeText={handleChange("phoneNumber")}
              onBlur={handleBlur("phoneNumber")}
              value={values.phoneNumber}
            />
          </View>
          {/* {errors.phoneNumber && touched.phoneNumber && (
          <Text style={stylesRegForm.errors}>{errors.phoneNumber}</Text>
        )} */}
          {props.renderButton({
            isValid,
            dirty,
            handleSubmit,
            title: "Продолжить",
          })}

          {/* <Button
          disabled={
            !isValid ||
            (Object.keys(touched).length === 0 &&
              touched.constructor === Object)
          }
          onPress={handleSubmit}
          title="Регистрация"
        /> */}
        </View>
      )}
    </Formik>
  );
};
