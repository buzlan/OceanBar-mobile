import { Formik } from "formik";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button } from "react-native-elements";
import { TextInput } from "react-native-paper";
import { connect } from "react-redux";
import {
  loadingFinished,
  loadingStarted,
  setUserData,
} from "../../actions/user";
import { AppLoader } from "../../components/AppLoader";
import { showAlert } from "../../components/ShowAlert";
import { AuthService } from "../../services/http/AuthService";
import { adressDeliveryScreenStyles } from "../../styles/adressDeliveryScreenStyles";
import { editProfileScreenStyles } from "../../styles/editProfileScreenStyles";
import { stylesRegForm } from "../../styles/regFormStyle";
import { formStyles } from "../../styles/stylesForm";
import { validateChangePassword } from "./validateChangePassword";

const changePasswordScreen = ({
  navigation,
  userInfo,
  loadingStarted,
  loadingFinished,
  isLoading,
}) => {
  return isLoading ? (
    <AppLoader />
  ) : (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={editProfileScreenStyles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Formik
          initialValues={{
            oldPassword: "",
            newPassword: "",
            repeatNewPassword: "",
          }}
          validateOnMount={true}
          initialErrors={{
            oldPassword: "initialError",
            newPassword: "initialError",
            repeatNewPassword: "initialError",
          }}
          validationSchema={validateChangePassword}
        >
          {({ handleChange, handleBlur, values, touched, errors, isValid }) => (
            <View style={formStyles.flex}>
              <View style={stylesRegForm.wrapperInput}>
                <TextInput
                  theme={{ colors: { primary: "grey" } }}
                  placeholder="Старый пароль"
                  onChangeText={handleChange("oldPassword")}
                  onBlur={handleBlur("oldPassword")}
                  secureTextEntry={true}
                  value={values.oldPassword}
                  selectionColor="black"
                  outlineColor="grey"
                  style={stylesRegForm.emailInput}
                />
                {errors.oldPassword && touched?.oldPassword && (
                  <Text style={stylesRegForm.errors}>{errors.oldPassword}</Text>
                )}
              </View>

              <View style={stylesRegForm.passwordWrapper}>
                <TextInput
                  // mode="outlined"
                  theme={{ colors: { primary: "grey" } }}
                  placeholder="Новый пароль"
                  secureTextEntry={true}
                  onChangeText={handleChange("newPassword")}
                  onBlur={handleBlur("newPassword")}
                  value={values.newPassword}
                  selectionColor="black"
                  outlineColor="grey"
                  style={stylesRegForm.passwordInput}
                />
                {errors.newPassword && touched.newPassword && (
                  <Text style={stylesRegForm.errors}>{errors.newPassword}</Text>
                )}
              </View>

              <View style={stylesRegForm.passwordWrapper}>
                <TextInput
                  // mode="outlined"
                  theme={{ colors: { primary: "grey" } }}
                  placeholder="Повторите новый пароль"
                  secureTextEntry={true}
                  onChangeText={handleChange("repeatNewPassword")}
                  onBlur={handleBlur("repeatNewPassword")}
                  value={values.repeatNewPassword}
                  selectionColor="black"
                  outlineColor="grey"
                  style={stylesRegForm.passwordInput}
                />
                {errors.repeatNewPassword && touched.repeatNewPassword && (
                  <Text style={stylesRegForm.errors}>
                    {errors.repeatNewPassword}
                  </Text>
                )}
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  paddingBottom: 50,
                }}
              >
                <Button
                  title="Сохранить"
                  titleStyle={adressDeliveryScreenStyles.titleRegisterBtn}
                  buttonStyle={adressDeliveryScreenStyles.registerButton}
                  disabledStyle={
                    adressDeliveryScreenStyles.disabledRegisterButton
                  }
                  disabledTitleStyle={
                    adressDeliveryScreenStyles.disabledTitleRegisterBtn
                  }
                  disabled={!isValid}
                  onPress={async () => {
                    try {
                      loadingStarted();
                      await AuthService.checkPassword(
                        userInfo.email,
                        values.oldPassword
                      );
                      loadingFinished();
                      if (
                        values.newPassword === values.repeatNewPassword &&
                        values.oldPassword !== values.newPassword
                      ) {
                        try {
                          loadingStarted();
                          await AuthService.updatePassword(
                            userInfo.id,
                            values.newPassword
                          );
                          loadingFinished();
                          showAlert("SUCCESSFULL", navigation);
                        } catch (err) {
                          loadingFinished();
                        }
                      } else {
                        if (values.newPassword !== values.repeatNewPassword) {
                          showAlert("NEWPASSWORDNOTCOMPARE");
                        }
                        if (values.oldPassword === values.newPassword) {
                          showAlert("OLDPASSWORDEQUALNEWPASSWORD");
                        }
                      }
                    } catch (err) {
                      loadingFinished();
                      showAlert("OLDPASSWORD");
                    }
                  }}
                />
              </View>
            </View>
          )}
        </Formik>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.UserData,
    isLoading: state.UserData.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (item) => dispatch(setUserData(item)),
    loadingStarted: () => dispatch(loadingStarted()),
    loadingFinished: () => dispatch(loadingFinished()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(changePasswordScreen);
