import React from "react";
import { Text, View } from "react-native";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import uuid from "uuid";

import { Button } from "react-native-elements";

import { ApiDelivery } from "../../services/http/apiDelivery";
import { stylesRegForm } from "../../styles/regFormStyle";
import { setProfileAdressScreenStyles } from "../../styles/setProfileAdressScreenStyles";
import { adressValidationSchema } from "../AdressDeliveryScreen/adressValidationSchema";
import { connect } from "react-redux";
import { AuthService } from "../../services/http/AuthService";
import { setUserData } from "../../actions/user";

const setProfileAdressScreen = ({
  navigation,
  setUserData,

  userInfo,
}) => {
  const [data, setData] = useState([]);
  // console.log("USERID", userInfo);

  const getData = async () => {
    const response = await ApiDelivery.getDelivery(searchQuery);
    const filteredResponse = response.data.suggestions.map(
      (item) => item.value
    );
    setData(filteredResponse);
  };
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    getData();
  }, [searchQuery]);

  return (
    <SafeAreaView style={setProfileAdressScreenStyles.mainSafeAreaViewWrapper}>
      <ScrollView>
        <View style={setProfileAdressScreenStyles.cityNameWrapper}>
          <Text style={setProfileAdressScreenStyles.cityNameStyle}>
            г.Минск
          </Text>
        </View>
        <View style={setProfileAdressScreenStyles.formikWrapper}>
          <Formik
            initialValues={
              userInfo.street !== null
                ? {
                    street: userInfo.street,
                    house: userInfo.homeNumber,
                    corpus: userInfo.homePart,
                    flat: userInfo.flat,
                  }
                : {
                    street: "",
                    house: "",
                    corpus: "",
                    flat: "",
                  }
            }
            validationSchema={adressValidationSchema}
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
                        setFieldValue("street", textV);
                        setSearchQuery(textV);
                      }}
                      onBlur={handleBlur("street")}
                      value={values.street}
                      placeholder="Улица"
                    />
                    {data.length > 0 ? (
                      <View style={{ alignItems: "center" }}>
                        <ScrollView
                          style={
                            setProfileAdressScreenStyles.searchItemsScrollWrapper
                          }
                        >
                          {data.map((item) => (
                            <TouchableOpacity
                              style={
                                setProfileAdressScreenStyles.itemSearchWrapper
                              }
                              key={uuid.v4()}
                              onPress={() => {
                                setFieldValue("street", item);
                                setData([]);
                              }}
                            >
                              <Text
                                style={
                                  setProfileAdressScreenStyles.itemTextStyle
                                }
                              >
                                {item}
                              </Text>
                            </TouchableOpacity>
                          ))}
                        </ScrollView>
                      </View>
                    ) : null}
                  </View>
                  <View>
                    <TextInput
                      style={setProfileAdressScreenStyles.textInputStyle}
                      onChangeText={(textV) => {
                        setFieldValue("house", textV);
                      }}
                      onBlur={handleBlur("house")}
                      value={values.house}
                      placeholder="Дом"
                    />
                    {errors.house && touched?.house && (
                      <Text style={stylesRegForm.errors}>{errors.house}</Text>
                    )}
                  </View>
                  <View>
                    <TextInput
                      style={setProfileAdressScreenStyles.textInputStyle}
                      onChangeText={handleChange("corpus")}
                      onBlur={handleBlur("corpus")}
                      value={values.corpus}
                      placeholder="Корпус"
                    />
                    {errors.corpus && touched?.corpus && (
                      <Text style={stylesRegForm.errors}>{errors.corpus}</Text>
                    )}
                  </View>
                  <View>
                    <TextInput
                      style={setProfileAdressScreenStyles.textInputStyle}
                      onChangeText={handleChange("flat")}
                      onBlur={handleBlur("flat")}
                      value={values.flat}
                      placeholder="Квартира"
                    />
                    {errors.flat && touched?.flat && (
                      <Text style={stylesRegForm.errors}>{errors.flat}</Text>
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
                      //QUERY POST TO UPDATE USERADRESS(USERINFO)
                      try {
                        const response = await AuthService.updateAdress(
                          values.street,
                          values.house,
                          values.corpus,
                          values.flat,
                          userInfo.id
                        );
                        await setUserData(response.data.data.user);
                      } catch (err) {
                        console.log(err);
                      }
                      navigation.navigate("MyAdress");
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
    adress: state.Adress,
    userInfo: state.UserData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (item) => dispatch(setUserData(item)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(setProfileAdressScreen);
