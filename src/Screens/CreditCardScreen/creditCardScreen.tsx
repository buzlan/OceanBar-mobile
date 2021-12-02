import React from "react";
import { Text, View } from "react-native";
import { Formik } from "formik";
import { SafeAreaView, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Button } from "react-native-elements";

import { stylesRegForm } from "../../styles/regFormStyle";
import { setProfileAdressScreenStyles } from "../../styles/setProfileAdressScreenStyles";
import { connect } from "react-redux";
import { creditCardSchema } from "./cardValidSchema";
import { setCreditCardData } from "../../actions/creditCard";

const setCreditCard = ({ navigation, creditCardInfo, setCardInfo, route }) => {
  console.log("CREDITCARDSTATE", creditCardInfo);
  return (
    <SafeAreaView style={setProfileAdressScreenStyles.mainSafeAreaViewWrapper}>
      <ScrollView>
        <View style={setProfileAdressScreenStyles.cityNameWrapper}>
          <Text style={setProfileAdressScreenStyles.cityNameStyle}>
            Введите данные карты
          </Text>
        </View>
        <View style={setProfileAdressScreenStyles.formikWrapper}>
          <Formik
            initialValues={{
              cardOwnerName: "",
              cardNumber: "",
              validity: "",
              CVVCVC: "",
            }}
            validateOnMount={true}
            validationSchema={creditCardSchema}
            onSubmit={() => {}}
          >
            {({
              handleChange,
              handleBlur,
              setFieldValue,
              setValues,
              values,
              touched,
              errors,
              isValid,
            }) => (
              <>
                <View>
                  <View>
                    <TextInput
                      style={setProfileAdressScreenStyles.textInputStyle}
                      onChangeText={(textV) => {
                        setFieldValue("cardOwnerName", textV);
                      }}
                      onBlur={handleBlur("cardOwnerName")}
                      value={values.cardOwnerName}
                      placeholder="Имя владельца"
                      autoCapitalize={"characters"}
                    />
                  </View>
                  <View>
                    <TextInput
                      style={setProfileAdressScreenStyles.textInputStyle}
                      onChangeText={(textV) => {
                        setFieldValue("cardNumber", textV);
                      }}
                      onBlur={handleBlur("cardNumber")}
                      value={values.cardNumber}
                      placeholder="Номер карты"
                    />
                    {errors.cardNumber && touched?.cardNumber && (
                      <Text style={stylesRegForm.errors}>
                        {errors.cardNumber}
                      </Text>
                    )}
                  </View>
                  <View>
                    <TextInput
                      style={setProfileAdressScreenStyles.textInputStyle}
                      onChangeText={handleChange("validity")}
                      onBlur={handleBlur("validity")}
                      value={values.validity}
                      placeholder="Срок действия"
                    />
                    {errors.validity && touched?.validity && (
                      <Text style={stylesRegForm.errors}>
                        {errors.validity}
                      </Text>
                    )}
                  </View>
                  <View>
                    <TextInput
                      style={setProfileAdressScreenStyles.textInputStyle}
                      onChangeText={handleChange("CVVCVC")}
                      onBlur={handleBlur("CVVCVC")}
                      value={values.CVVCVC}
                      placeholder="CVV/CVC"
                    />
                    {errors.CVVCVC && touched?.CVVCVC && (
                      <Text style={stylesRegForm.errors}>{errors.CVVCVC}</Text>
                    )}
                  </View>
                </View>
                <View style={setProfileAdressScreenStyles.buttonWrapper}>
                  <Button
                    title="Сохранить"
                    titleStyle={setProfileAdressScreenStyles.titleRegisterBtn}
                    buttonStyle={setProfileAdressScreenStyles.registerButton}
                    disabledStyle={
                      setProfileAdressScreenStyles.disabledRegisterButton
                    }
                    disabledTitleStyle={
                      setProfileAdressScreenStyles.disabledTitleRegisterBtn
                    }
                    disabled={!isValid}
                    onPress={async () => {
                      setValues(values);
                      try {
                        await setCardInfo(values);
                      } catch (err) {
                        console.log("ERROR", err);
                      }
                      route.params?.from
                        ? navigation.navigate("Confirmation")
                        : navigation.navigate("MyCards");
                    }}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => {
  return {
    creditCardInfo: state.CardStore,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCardInfo: (item) => dispatch(setCreditCardData(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(setCreditCard);
