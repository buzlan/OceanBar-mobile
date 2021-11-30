import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-paper";
import { Avatar } from "react-native-paper";
import { editProfileScreenStyles } from "../../styles/editProfileScreenStyles";
import { connect } from "react-redux";
import { Formik } from "formik";
import { formStyles } from "../../styles/stylesForm";
import { stylesRegForm } from "../../styles/regFormStyle";
import { profileValidSchema } from "./profileValidationSchema";
import { adressDeliveryScreenStyles } from "../../styles/adressDeliveryScreenStyles";
import { Button } from "react-native-elements";
import { setUserData } from "../../actions/user";
import { AuthService } from "../../services/http/AuthService";

const EditProfileScreen = ({ userInfo, navigation, setUserInfo }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={editProfileScreenStyles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Formik
          initialValues={{
            firstname: userInfo.name,
            lastname: userInfo.secondname,
            email: userInfo.email,
            phone: userInfo.phone,
            password: userInfo.password,
          }}
          validateOnMount={true}
          validationSchema={profileValidSchema}
        >
          {({ handleChange, handleBlur, values, touched, errors, isValid }) => (
            <View style={formStyles.flex}>
              <View style={{ alignItems: "center", paddingTop: 30 }}>
                <Avatar.Image
                  source={require("../../assets/img/user2.jpg")}
                  size={80}
                />
                <Text
                  style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}
                >
                  {`${values.firstname} ${values.lastname}`}
                </Text>
              </View>
              <View style={stylesRegForm.wrapperInput}>
                <TextInput
                  theme={{ colors: { primary: "grey" } }}
                  placeholder="Имя"
                  onChangeText={handleChange("firstname")}
                  onBlur={handleBlur("firstname")}
                  value={values.firstname}
                  selectionColor="black"
                  outlineColor="grey"
                  style={stylesRegForm.emailInput}
                />
                {errors.firstname && touched?.firstname && (
                  <Text style={stylesRegForm.errors}>{errors.firstname}</Text>
                )}
              </View>

              <View style={stylesRegForm.passwordWrapper}>
                <TextInput
                  theme={{ colors: { primary: "grey" } }}
                  placeholder="Фамилия"
                  onChangeText={handleChange("lastname")}
                  onBlur={handleBlur("lastname")}
                  value={values.lastname}
                  selectionColor="black"
                  outlineColor="grey"
                  style={stylesRegForm.passwordInput}
                />
                {errors.lastname && touched.lastname && (
                  <Text style={stylesRegForm.errors}>{errors.lastname}</Text>
                )}
              </View>

              <View style={stylesRegForm.passwordWrapper}>
                <TextInput
                  theme={{ colors: { primary: "grey" } }}
                  placeholder="Почта"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  selectionColor="black"
                  outlineColor="grey"
                  style={stylesRegForm.passwordInput}
                />
                {errors.email && touched.email && (
                  <Text style={stylesRegForm.errors}>{errors.email}</Text>
                )}
              </View>

              <View style={stylesRegForm.passwordWrapper}>
                <TextInput
                  theme={{ colors: { primary: "grey" } }}
                  placeholder="Номер телефона"
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                  selectionColor="black"
                  outlineColor="grey"
                  style={stylesRegForm.passwordInput}
                />
                {errors.phone && touched.phone && (
                  <Text style={stylesRegForm.errors}>{errors.phone}</Text>
                )}
              </View>

              <View style={stylesRegForm.passwordWrapper}>
                <TextInput
                  theme={{ colors: { primary: "grey" } }}
                  placeholder="Пароль"
                  value="qwe2Fqwe"
                  secureTextEntry={true}
                  selectionColor="black"
                  outlineColor="grey"
                  right={
                    <TextInput.Icon
                      name={"lead-pencil"}
                      onPress={() => {
                        navigation.navigate("ChangePassword");
                      }}
                    />
                  }
                  style={stylesRegForm.passwordInput}
                />
                {errors.password && touched.password && (
                  <Text style={stylesRegForm.errors}>{errors.password}</Text>
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
                  title="Готово"
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
                    //QUERY POST TO UPDATE USERADRESS(USERINFO)
                    try {
                      const response = await AuthService.updateProfileData(
                        values.firstname,
                        values.lastname,
                        values.phone,
                        values.email,
                        userInfo.id
                      );
                      await setUserInfo(response.data.data.user);
                    } catch (err) {
                      console.log(err);
                    }
                    navigation.navigate("Profile");
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserInfo: (data) => dispatch(setUserData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileScreen);
