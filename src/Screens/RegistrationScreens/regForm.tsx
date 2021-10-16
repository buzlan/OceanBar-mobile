import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Button, Keyboard, View } from "react-native";

import { SecondStepScreen } from "./RegistrationScreensSteps/secondStepScreen";
import { FirstStepScreen } from "./RegistrationScreensSteps/firstStepScreen";
import { StepIndicatorComponent } from "../../components/StepIndicator";

export const RegistrationForm = ({ navigation, route }) => {
  const [step, setStep] = useState(1);
  function changeState(newStep) {
    setStep(newStep);
  }
  const renderButton = ({ isValid, dirty, handleSubmit, title }) => (
    <>
      <StepIndicatorComponent sendStep={step} />
      <Button
        disabled={!(isValid && dirty)}
        onPress={handleSubmit}
        title={title}
      />
    </>
  );
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {step === 1 && (
        <>
          <View>
            <FirstStepScreen
              sendStep={() => changeState(2)}
              renderButton={renderButton}
            />
          </View>
        </>
      )}

      {step === 2 && (
        <View>
          <SecondStepScreen
            sendStep={() => changeState(3)}
            renderButton={renderButton}
          />
        </View>
      )}
    </TouchableWithoutFeedback>
  );
};
