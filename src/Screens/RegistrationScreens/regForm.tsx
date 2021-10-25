import React, { useRef, useState } from "react";
import { View, Alert } from "react-native";

import { SecondStepScreen } from "./RegistrationScreensSteps/secondStepScreen";
import { FirstStepScreen } from "./RegistrationScreensSteps/firstStepScreen";
import { StepIndicatorComponent } from "../../components/StepIndicator";
import { ThirdStepScreen } from "./RegistrationScreensSteps/thirdStepScreen";
import { Button } from "react-native-elements";
import { stylesLoginForm } from "../../styles/loginFormStyle";
import { renderBtnStyles } from "../../styles/renderButtonStyle";
import { formStyles } from "../../styles/stylesForm";

export const RegistrationForm = ({ navigation, route }) => {
  const [step, setStep] = useState(1);
  const backListener = useRef();

  const [initialValues, setInitialValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const [initialPhoneNumber, setInitialPhoneNumber] = useState({
    phoneNumber: "",
  });

  function changeState(newStep) {
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
          title={title}
          buttonStyle={stylesLoginForm.registerButton}
          titleStyle={stylesLoginForm.titleRegisterBtn}
        />
      </View>
    );
  };
  React.useEffect(() => {
    if (backListener.current) {
      navigation.removeListener("beforeRemove", backListener.current);
    }

    backListener.current = navigation.addListener("beforeRemove", (e) => {
      console.log(step, "step");
      if (step === 1 || step === 4) {
        return;
      }
      // Prevent default behavior of leaving the screen
      e.preventDefault();
      setStep((prev) => (prev > 1 ? prev - 1 : prev));
    });
  }, [navigation, step]);
  return (
    <View style={formStyles.wrapper}>
      <StepIndicatorComponent sendStep={step} />
      {step === 1 && (
        <View style={formStyles.flex}>
          <FirstStepScreen
            initialValues={initialValues}
            onChange={setInitialValues}
            sendStep={() => changeState(2)}
            renderButton={renderButton}
          />
        </View>
      )}

      {step === 2 && (
        <View style={formStyles.flex}>
          <SecondStepScreen
            initialPhoneNumber={initialPhoneNumber}
            onChange={setInitialPhoneNumber}
            sendStep={() => changeState(3)}
            renderButton={renderButton}
          />
        </View>
      )}
      {step === 3 && (
        <View style={formStyles.flex}>
          <ThirdStepScreen
            showAlert={() => showAlert()}
            sendStep={() => changeState(4)}
            renderButton={renderButton}
          />
        </View>
      )}
    </View>
  );
};
