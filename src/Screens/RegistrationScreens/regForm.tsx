import React, { useRef, useState } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Button, Keyboard, View, Alert } from "react-native";

import { SecondStepScreen } from "./RegistrationScreensSteps/secondStepScreen";
import { FirstStepScreen } from "./RegistrationScreensSteps/firstStepScreen";
import { StepIndicatorComponent } from "../../components/StepIndicator";
import { ThirdStepScreen } from "./RegistrationScreensSteps/thirdStepScreen";

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

  const renderButton = ({ isValid, dirty, handleSubmit, title }) => {
    return (
      <>
        <StepIndicatorComponent sendStep={step} />
        <Button
          disabled={!isValid ? true : false}
          onPress={handleSubmit}
          title={title}
        />
      </>
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {step === 1 && (
        <>
          <View>
            <FirstStepScreen
              initialValues={initialValues}
              onChange={setInitialValues}
              sendStep={() => changeState(2)}
              renderButton={renderButton}
            />
          </View>
        </>
      )}

      {step === 2 && (
        <View>
          <SecondStepScreen
            initialPhoneNumber={initialPhoneNumber}
            onChange={setInitialPhoneNumber}
            sendStep={() => changeState(3)}
            renderButton={renderButton}
          />
        </View>
      )}
      {step === 3 && (
        <View>
          <ThirdStepScreen
            showAlert={() => showAlert()}
            sendStep={() => changeState(4)}
            renderButton={renderButton}
          />
        </View>
      )}
    </TouchableWithoutFeedback>
  );
};
