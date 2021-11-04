import React, { useEffect, useRef, useState } from "react";
import { View, Alert } from "react-native";

import { SecondStepScreen } from "./RegistrationScreensSteps/secondStepScreen";
import { FirstStepScreen } from "./RegistrationScreensSteps/firstStepScreen";
import { StepIndicatorComponent } from "../../components/StepIndicator";
import { ThirdStepScreen } from "./RegistrationScreensSteps/thirdStepScreen";
import { Button } from "react-native-elements";
import { renderBtnStyles } from "../../styles/renderButtonStyle";
import { formStyles } from "../../styles/stylesForm";
import { AuthService } from "../../services/http/AuthService";
import { stylesRegForm } from "../../styles/regFormStyle";

export type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  password: string;
};

export const RegistrationForm = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const backListener = useRef();
  const [regError, setRegError] = useState<string | undefined>(undefined);

  const [formValues, setFormValues] = useState<FormValues>({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  useEffect(() => {
    if (backListener.current) {
      navigation.removeListener("beforeRemove", backListener.current);
    }

    backListener.current = navigation.addListener("beforeRemove", (e) => {
      if (step === 1 || step === 4) {
        return;
      }
      // Prevent default behavior of leaving the screen
      e.preventDefault();
      setStep((prev) => (prev > 1 ? prev - 1 : prev));
    });
  }, [navigation, step]);

  useEffect(() => {
    (async () => {
      if (Object.values(formValues).every(Boolean)) {
        try {
          const response = await AuthService.register(
            formValues.firstname,
            formValues.lastname,
            formValues.email,
            formValues.phoneNumber,
            formValues.password
          );
          setRegError(undefined);
          setFormValues({
            firstname: "",
            lastname: "",
            email: "",
            phoneNumber: "",
            password: "",
          });
          showAlert();
        } catch (err) {
          setRegError("User with such email already exists");
          setFormValues((prevValues) => ({
            ...prevValues,
            password: "",
          }));
          setStep(1);
        }
      }
    })();
  }, [formValues]);

  function changeState(newStep: number) {
    setStep(newStep);
  }

  const showAlert = () =>
    Alert.alert(
      "Активация профиля",
      "Для активации вашего профиля, пожалуйста, перейдите по ссылке из письма, которое было выслано на указанную электронную почту.",
      [
        {
          text: "ОК",
          onPress: () => navigation.navigate("LoginScreen"),
          style: "cancel",
        },
      ]
    );

  const renderButton = ({ isValid, handleSubmit, title }) => {
    return (
      <View style={renderBtnStyles.button}>
        <Button
          disabled={!isValid ? true : false}
          onPress={handleSubmit}
          disabledStyle={stylesRegForm.registerButton}
          disabledTitleStyle={stylesRegForm.titleRegisterBtn}
          title={title}
          buttonStyle={stylesRegForm.inputButton}
          titleStyle={stylesRegForm.titleInputBtn}
        />
      </View>
    );
  };

  return (
    <View style={formStyles.wrapper}>
      <StepIndicatorComponent sendStep={step} />
      {step === 1 && (
        <View style={formStyles.flex}>
          <FirstStepScreen
            regError={regError}
            formValues={formValues}
            onChange={setFormValues}
            sendStep={() => changeState(2)}
            renderButton={renderButton}
          />
        </View>
      )}

      {step === 2 && (
        <View style={formStyles.flex}>
          <SecondStepScreen
            formValues={formValues}
            onChange={setFormValues}
            sendStep={() => changeState(3)}
            renderButton={renderButton}
          />
        </View>
      )}
      {step === 3 && (
        <View style={formStyles.flex}>
          <ThirdStepScreen
            formValues={formValues}
            onChange={setFormValues}
            sendStep={() => changeState(4)}
            renderButton={renderButton}
          />
        </View>
      )}
    </View>
  );
};
