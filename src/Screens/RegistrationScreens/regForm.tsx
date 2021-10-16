import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Keyboard } from "react-native";

import { SecondStepScreen } from "./RegistrationScreensSteps/secondStepScreen";
import { FirstStepScreen } from "./RegistrationScreensSteps/firstStepScreen";

export const RegistrationForm = ({ navigation }) => {
  const [step, setStep] = useState(1);
  function changeState(newStep) {
    setStep(newStep);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {step === 1 && <FirstStepScreen sendStep={() => changeState(2)} />}
      {step === 2 && <SecondStepScreen />}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    width: 200,
    marginTop: 20,
    backgroundColor: "transparent",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
  },
  btnText: {
    color: "black",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  disabledButton: {
    color: "green",
  },
});
